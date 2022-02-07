const fetch = require(`node-fetch`)

const API_KEY = process.env.YOUTUBE_DATA_API_V3_API_KEY
const VIDEO_ID = process.env.YOUTBUE_VIDEO_ID

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const videoIds = VIDEO_ID.split(",")
  const result = await Promise.all(
    videoIds.map(async videoId => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      )
      const data = await response.json()
      const {
        title,
        thumbnails,
        publishedAt,
        name,
        thumbnailUrl,
        uploadDate,
      } = data.items[0].snippet
      const schema = { id: data.items[0].id, ...data.items[0].snippet }

      if (!name && title) schema.name = title
      if (!uploadDate && publishedAt) schema.uploadDate = publishedAt
      if (
        !thumbnailUrl &&
        typeof thumbnails === "object" &&
        thumbnails.default &&
        thumbnails.default.url
      )
        schema.thumbnailUrl = thumbnails.default.url

      return schema
    })
  )

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
