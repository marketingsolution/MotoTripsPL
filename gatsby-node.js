const fetch = require(`node-fetch`)
const path = require(`path`)

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
    const films = [...news, ...post].map(node => node.film)
    

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

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Bikes {
      allMysqlBikes {
        edges {
          node {
            id
            make
            model
            year_of_launch
            power_rpm
          }
        }
      }
    }
  `)

  // console.log(data)

  const bikes = data.allMysqlBikes.edges

  bikes.forEach(edge => {
    const { node } = edge
    // console.log({ nodeId: node.id })
    actions.createPage({
      path: "/katalog-motocykli/" + node.id,

      component: path.resolve("./src/templates/bike-details.js"),
      context: { id: node.id },
    })

    actions.createPage({
      path: "/katalog-motocykli/" + node.make,

      component: path.resolve("./src/templates/brand-name-bikes.js"),
      context: { brandName: node.make },
    })

    actions.createPage({
      path: `/katalog-motocykli/${node.make}/${node.model}`,
      component: path.resolve("./src/templates/model-name-bikes.js"),
      context: { brandName: node.make, modelName: node.model },
    })

    actions.createPage({
      path: `/katalog-motocykli/${node.make}/${node.model}/${node.year_of_launch}-${node.power_rpm}`,
      component: path.resolve("./src/templates/year-bike.js"),
      context: {
        brandName: node.make,
        modelName: node.model,
        yearOfLaunch: node.year_of_launch,
        capacity: node.power_rpm,
      },
    })
  })

  // if (bikes.length) {
  //   // console.log(JSON.stringify(bikes))
  //   const brands = bikes.map(bike => bike.node.make)
  //   // console.log({ brands })
  //   const uniqueBrands = [...new Set(brands)]
  //   // console.log({ uniqueBrands })x
  //   uniqueBrands.forEach(brand => {
  //     // const { node } = edge
  //     // console.log({ nodeId: node.id })

  //     actions.createPage({
  //       path: "/katalog-motocykli/" + brand,

  //       component: path.resolve("./src/templates/brand-name-bikes.js"),
  //       context: { brandName: brand },
  //     })
  //   })

  //   const models = bikes.map(bike => bike.node.model)
  //   const uniqueModels = [...new Set(models)]
  //   uniqueModels.forEach(model => {
  //     // const { node } = edge
  //     // console.log({ nodeId: node.id })
  //     const currentBike = bikes.find(bike => bike.node.model === model)
  //     // console.log({ currentBike, model })

  //     if (currentBike?.node?.make && model) {
  //       // console.log("if")
  //       actions.createPage({
  //         path: `/katalog-motocykli/${currentBike.node.make}/${model}`,

  //         component: path.resolve("./src/templates/model-name-bikes.js"),
  //         context: { brandName: currentBike?.node?.make, modelName: model },
  //       })
  //     }
  //   })

  //   const years = bikes.map(bike => bike.node.year_of_launch)
  //   const capacities = bikes.map(bike => bike.node.power_rpm)
  //   const uniqueYears = [...new Set(years)]
  //   const uniqueCapacites = [...new Set(capacities)]
  //   const yaersAndCapacites = []
  //   uniqueYears.forEach(year => {
  //     uniqueCapacites.forEach(capacity => {
  //       yaersAndCapacites.push(`${year}-${capacity}`)
  //     })
  //   })

  //   yaersAndCapacites.forEach(el => {
  //     // const { node } = edge
  //     // console.log({ nodeId: node.id })
  //     const currentBike = bikes.find(
  //       bike => `${bike.node.year_of_launch}-${bike.node.power_rpm}` === el
  //     )
  //     // console.log({ currentBike })

  //     // console.log({ currentBike, model })

  //     if (currentBike?.node?.make && currentBike?.node?.model && el) {
  //       console.log(
  //         "if",
  //         `/katalog-motocykli/${currentBike.node.make}/${currentBike.node.model}/${el}`
  //       )
  //       actions.createPage({
  //         path: `/katalog-motocykli/${currentBike.node.make}/${currentBike.node.model}/${el}`,

  //         component: path.resolve("./src/templates/year-bike.js"),
  //         context: {
  //           brandName: currentBike?.node?.make,
  //           modelName: currentBike.node.model,
  //           yearOfLaunch: currentBike?.node.year_of_launch,
  //           capacity: currentBike?.node?.power_rpm,
  //         },
  //       })
  //     }
  //   })

  //   // return uniqueBrands
  // }
}