const fetch = require(`node-fetch`)

const API_KEY = process.env.YOUTUBE_DATA_API_V3_API_KEY
const CHANNEL_IDS = process.env.YOUTUBE_CHANNEL_IDS
const REGIONS_ALLOWED = process.env.REGIONS_ALLOWED

const getChannelInfo = async ({
  channelId,
  maxResults,
  order,
  pageToken,
  part,
}) => {
  if (!API_KEY || !channelId) return

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}${
      maxResults ? `&maxResults=${maxResults}` : ""
    }${order ? `&order=${order}` : ""}${
      pageToken ? `&pageToken=${pageToken}` : ""
    }${part ? `&part=${part}` : ""}`
  )

  if (response.status === 200) return await response.json()

  throw await response.json()
}

const getVideoSchema = ({ kind, videoId }) => {
  if (!API_KEY || !videoId) return

  if (kind === "youtube#video")
    return new Promise((resolve, reject) => {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      )
        .then(response => {
          if (response.status === 200)
            response
              .json()
              .then(videoData => {
                const { items } = videoData
                const { snippet, statistics } = items[0]
                const {
                  title,
                  thumbnails,
                  publishedAt,
                  name,
                  thumbnailUrl,
                  uploadDate,
                } = snippet
                const { viewCount } = statistics
                const schema = {
                  id: videoId,
                  ...snippet,
                  viewCount,
                }

                if (REGIONS_ALLOWED) schema.regionsAllowed = REGIONS_ALLOWED

                if (!name && title) schema.name = title
                if (!uploadDate && publishedAt) schema.uploadDate = publishedAt
                if (
                  !thumbnailUrl &&
                  typeof thumbnails === "object" &&
                  thumbnails.default &&
                  thumbnails.default.url
                )
                  schema.thumbnailUrl = thumbnails.default.url

                resolve(schema)
              })
              .catch(reject)
          else response.json().then(reject)
        })
        .catch(reject)
    })
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const channelIds = CHANNEL_IDS.split(",")
  const pageSize = 50
  const order = "date"
  const part = "snippet,id"
  const result = (
    await Promise.all(
      channelIds.map(async channelId => {
        const getAllChannelVideos = async pageToken => {
          try {
            const channelData = await getChannelInfo({
              channelId,
              maxResults: pageSize,
              order,
              pageToken,
              part,
            })

            const { items, nextPageToken } = channelData
            const videoSchemas = await Promise.all(
              items.reduce((schemas, resource) => {
                try {
                  const schema = getVideoSchema(resource.id)
                  if (schema) return [...schemas, schema]
                } catch (err) {
                  console.log(err)
                }

                return schemas
              }, [])
            )

            if (!nextPageToken) return videoSchemas

            const nextPageVideos = await getAllChannelVideos(nextPageToken)

            return [...videoSchemas, ...nextPageVideos]
          } catch (err) {
            console.log(err)
          }
        }

        return getAllChannelVideos()
      })
    )
  ).flat()

  createNode({
    id: `youtube-video-schema`,
    schema: result,
    parent: null,
    children: [],
    internal: {
      type: `Youtube`,
      contentDigest: createContentDigest(result),
    },
  })
}
