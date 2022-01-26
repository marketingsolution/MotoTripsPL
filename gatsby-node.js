const fetch = require(`node-fetch`)

const API_KEY = process.env.YOUTUBE_DATA_API_V3_API_KEY
const VIDEO_ID = process.env.YOUTBUE_VIDEO_ID

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`
  )
  const resultData = await result.json()

  createNode({
    id: `youtube-video-schema`,
    schema: resultData.items[0].snippet,
    parent: null,
    children: [],
    internal: {
      type: `Youtube`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
