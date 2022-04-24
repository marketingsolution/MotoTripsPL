const path = require(`path`)

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
