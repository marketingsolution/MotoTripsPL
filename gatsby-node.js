const fetch = require(`node-fetch`)

const API_KEY = process.env.YOUTUBE_DATA_API_V3_API_KEY
const REGIONS_ALLOWED = process.env.REGIONS_ALLOWED

const kind = "youtube#video"

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
  createNodeId,
  getNodesByType,
}) => {
  try {
    const news = getNodesByType("WpNews")
    const post = getNodesByType("WpPost")
    const mdx = getNodesByType("mdx")
    const films = [...news, ...post, ...mdx].map(node => node.film)
    

    const videoIds = films.reduce((filmIds, film) => {
      if (film.trim()) {
        const filmParts = film.match(
          /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i
        )

        if (Array.isArray(filmParts) && filmParts.length > 1) {
          const videoId = filmParts[1].trim()
          if (videoId) return [...filmIds, videoId]
        }
      }

      return filmIds
    }, [])

    const result = await Promise.all(
      videoIds.reduce((schemas, videoId) => {
        try {
          const schema = getVideoSchema({ kind, videoId })
          if (schema) return [...schemas, schema]
        } catch (err) {
          console.log(err)
        }

        return schemas
      }, [])
    )

    createNode({
      id: createNodeId(`youtube-video-schema`),
      schema: result,
      parent: null,
      children: [],
      internal: {
        type: `Youtube`,
        contentDigest: createContentDigest(result),
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/trening/pkk-profil-kandydata-na-kierowce/`,
    toPath: `/porady/pkk-profil-kandydata-na-kierowce-jak-wyrobic-pytania-i-odpowiedzi/`,
  });
  createRedirect({
    fromPath: `/news/dokumenty-potrzebne-do-rejestracji-motocykla-z-zagranicy/`,
    toPath: `/porady/dokumenty-potrzebne-do-rejestracji-motocykla-z-zagranicy/`,
  });
  createRedirect({
    fromPath: `/aktualnosci/jak-przerejestrowac-motocykl-szybko-i-bez-komplikacji/`,
    toPath: `/porady/jak-przerejestrowac-motocykl-szybko-i-bez-komplikacji/`,
  });
}
