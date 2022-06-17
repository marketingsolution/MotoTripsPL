import { graphql, Link, navigate } from "gatsby"
import React, { useEffect, useMemo, useRef, useState } from "react"
import BikeCard from "../components/BikeCard"
import Layout from "../components/Layout"

import * as classes from "../styles/home.module.css"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import CustomeSelect from "../components/CustomeSelect"
import { Button } from "gatsby-theme-material-ui"
import RangeSlider from "../components/RangeSlider"
import "../styles/index.css"

export default function KatalogMotorcyckli({ data, location }) {
  // console.log(data)
  // console.log(location)

  const bikesPerPage = 24
  const [num, setNum] = useQueryParam("p", NumberParam)
  // const { title, description } = data.site.siteMetadata
  const [brandName, setBrandName] = useState("")

  const bikes = data.allMysqlBikes.edges
  const [bikesToRender, setBikesToRender] = useState(bikes)
  // State for the list
  const [list, setList] = useState([...bikesToRender.slice(0, 10)])

  const [brands, setBrands] = useState([])

  // State to trigger oad more

  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(bikesToRender.length > 10)

  const [isMore, setIsMore] = useState(false)

  //Set a ref for the loading div
  const loadRef = useRef()

  const [currentPage, setCurrentPage] = useState(1)

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    console.log({ bikes })
    // alert("here")
    if (bikes.length) {
      const brands = []
      bikes.forEach(bike => {
        const exits = brands.includes(bike.node.make)
        if (!exits) {
          brands.push(bike.node.make)
        }
      })
      setBrands(brands)
      console.log("here////////////////////////////", { brands })
    }
  }, [])

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < bikesToRender.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  //   useEffect(() => {
  //     navigate("/here")
  //   }, [])

  useEffect(() => {
    console.log({ location })
    const params = new URLSearchParams(location.hash)
    const param = location?.hash.split("=")[1]

    const paramNum = Number(param) ? Number(param) : 1
    const sliceFrom = (paramNum - 1) * bikesPerPage
    console.log({ sliceFrom })

    const sliceTo = sliceFrom + bikesPerPage
    setIsMore(sliceFrom < bikesToRender.length)
    console.log({ sliceTo })
    setList(bikesToRender.slice(sliceFrom, sliceTo))
    // setCurrentPage(paramNum)
    if (!!paramNum) {
      navigate(`/katalog-motocykli#?p=${paramNum}`)
    } else {
      navigate(`/katalog-motocykli`)
    }
  }, [])

  //   console.log(getSearchParams())

  const handleChange = ev => {
    setBrandName(ev.target.value)
  }

  const bikeBrands = useMemo(() => {
    if (bikesToRender.length) {
      const brands = bikesToRender.map(bike => bike.node.make)
      const uniqueBrands = [...new Set(brands)]
      // console.log({ uniqueBrands })
      return uniqueBrands
    } else return []
  }, [bikesToRender])

  // console.log({ brandName })

  // console.log()

  const handleNext = () => {
    const params = new URLSearchParams(location.hash)
    const param = location?.hash.split("=")[1]

    const paramNum = Number(param) ? Number(param) + 1 : 2
    console.log({ paramNum })
    const sliceFrom = paramNum * bikesPerPage
    console.log({ sliceFrom })

    const sliceTo = sliceFrom + bikesPerPage
    console.log({ sliceTo })

    // console.log({ param: Number(param) }, param, bikesToRender)
    // const currentLength = list.length
    const isMore = sliceFrom < bikesToRender.length
    setIsMore(isMore)
    console.log({ isMore })

    // if (isMore) {
    console.log(sliceFrom, sliceTo)

    setList(bikesToRender.slice(sliceFrom, sliceTo))
    // setCurrentPage(paramNum)
    navigate(`/katalog-motocykli#?p=${paramNum}`)
    // }
  }

  const handlePrev = () => {
    const params = new URLSearchParams(location.hash)
    const param = location?.hash.split("=")[1]

    const paramNum = Number(param) ? Number(param) - 1 : 2
    console.log({ paramNum })
    const sliceFrom = paramNum * bikesPerPage
    console.log({ sliceFrom })

    const sliceTo = sliceFrom + bikesPerPage
    console.log({ sliceTo })

    // console.log({ param: Number(param) }, param, bikesToRender)
    // const currentLength = list.length
    const isMore = sliceFrom < bikesToRender.length
    console.log({ isMore })
    setIsMore(isMore)

    if (isMore) {
      // console.log(sliceFrom, sliceTo)

      setList(bikesToRender.slice(sliceFrom, sliceTo))
      // setCurrentPage(paramNum)
      // if (paramNum === 1) {
      //   navigate(`/katalog-motocykli`)
      // } else {
      navigate(`/katalog-motocykli#?p=${paramNum}`)
      // }
    }
  }

  console.log({ length: bikesToRender.length })

  useEffect(() => {
    const param = location?.hash.split("=")[1]

    const paramNum = Number(param) ? Number(param) : 1

    setCurrentPage(paramNum)
  }, [location?.hash])

  console.log(bikesToRender)

  const [minRPM, setMinRPM] = useState(0)
  const [maxRPM, setMaxRPM] = useState(0)
  const [minPS, setMinPS] = useState(0)
  const [maxPS, setMaxPS] = useState(0)

  const [minRPMDefault, setMinRPMDefault] = useState(0)
  const [maxRPMDefault, setMaxRPMDefault] = useState(0)
  const [minPSDefault, setMinPSDefault] = useState(0)
  const [maxPSDefault, setMaxPSDefault] = useState(0)
  useEffect(() => {
    const bikesRPM = bikesToRender
      .map(el => Number(el?.node?.power_rpm))
      .filter(el => !!el)
    const bikesPS = bikesToRender
      .map(el => Number(el?.node?.power_ps))
      .filter(el => !!el)

    setMinRPM(Math.min(...bikesRPM))
    setMaxRPM(Math.max(...bikesRPM))
    setMinPS(Math.min(...bikesPS))
    setMaxPS(Math.max(...bikesPS))

    setMinRPMDefault(Math.min(...bikesRPM))
    setMaxRPMDefault(Math.max(...bikesRPM))
    setMinPSDefault(Math.min(...bikesPS))
    setMaxPSDefault(Math.max(...bikesPS))

    console.log({ bikesRPM, bikesPS })
  }, [])

  console.log({ minRPM, maxRPM, minPS, maxPS })

  const handleFilter = () => {
    const filterd = bikes.filter(el => {
      const { power_ps, power_rpm } = el.node
      const numPS = Number(power_ps)
      const numRPM = Number(power_rpm)
      if (!numPS || !numRPM) return false

      const inPSRange = numPS >= minPS && numPS <= maxPS
      const inRPMRange = numRPM >= minRPM && numRPM <= maxRPM

      return !!(inPSRange && inRPMRange)
    })
    console.log({ filterd })

    setBikesToRender(filterd)
    setList(filterd.slice(0, bikesPerPage))
    setCurrentPage(1)
    navigate(`/katalog-motocykli#?p=1`)

    console.log({ filterd })
  }

  const handleLast = () => {
    const sliceTo = bikesToRender.length
    const sliceFrom = sliceTo - bikesPerPage
    const bikes = bikesToRender.slice(sliceFrom, sliceTo)
    setList(bikes)
    const pageNum = Math.floor(bikesToRender.length / bikesPerPage)
    navigate(`/katalog-motocykli#?p=${pageNum}`)
  }

  const canClickLast = useMemo(() => {
    if (bikesToRender.length && list.length) {
      console.log("if")
      const lastBikesToRenderItem = bikesToRender[bikesToRender.length - 1]
      const lastListItem = list[list.length - 1]
      const areSame = lastBikesToRenderItem.node.id === lastListItem.node.id

      console.log({
        areSame,
        lastBikesToRenderItem: lastBikesToRenderItem,
        lastListItem: lastListItem,
      })

      return !areSame
    }

    return false
  }, [bikesToRender, list])

  const handleFirst = () => {
    // const sliceTo = bikesToRender.length
    // const sliceFrom = sliceTo - bikesPerPage
    const bikes = bikesToRender.slice(0, bikesPerPage)
    setList(bikes)
    navigate(`/katalog-motocykli#?p=1`)
  }

  const canClickFirst = useMemo(() => {
    if (bikesToRender.length && list.length) {
      const firstBike = bikesToRender[0]
      const firstList = list[0]
      const areSame = firstBike.node.id === firstList.node.id
      console.log({ firstBike, firstList, areSame })
      console.log(currentPage)
      return !areSame
    }

    return false
  }, [bikesToRender, list, currentPage])

  useEffect(() => {
    console.log({ list })
  }, [list])

  const handleBrandClick = brand => {
    // alert(brand)
    const filterd = bikesToRender.filter(bike => bike.node.make === brand)
    setList(filterd)
  }

  return (
    <Layout>
      <div
        style={{
          // border: "2px solid red",
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        {brands.map(el => (
          <div
            style={{
              border: "2px solid black",
              padding: 50,
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={() => handleBrandClick(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <RangeSlider
            title="Power RPM"
            minD={minRPMDefault}
            maxD={maxRPMDefault}
            min={minRPM}
            setMin={setMinRPM}
            max={maxRPM}
            setMax={setMaxRPM}
          />
          <RangeSlider
            title="Power PS"
            minD={minPSDefault}
            maxD={maxPSDefault}
            min={minPS}
            setMin={setMinPS}
            max={maxPS}
            setMax={setMaxPS}
          />
          <Button
            variant="contained"
            // disabled={}
            title="filter"
            onClick={handleFilter}
          >
            filter
          </Button>
        </div>

        {/* <div>
          <div>Filter by brand</div>
          <CustomeSelect
            data={bikeBrands.map(brand => ({ name: brand, id: brand }))}
            title="Brand"
            value={brandName}
            name="brand"
            handleChange={handleChange}
          />
          <Button
            variant="contained"
            disabled={!brandName}
            title="filter"
            onClick={() => {
              if (brandName) {
                navigate(`/katalog-motocykli/${brandName}`)
              }
            }}
          >
            filter
          </Button>
        </div> */}

        <div className={classes.container}>
          {list.length ? (
            list.map(el => {
              return <BikeCard key={el.node.id} data={el.node} />
            })
          ) : (
            <h2>No Data Found</h2>
          )}
        </div>

        <div className={classes.footer}>
          <div
            style={!canClickFirst ? { color: "gray" } : { cursor: "pointer" }}
            onClick={() => {
              if (canClickFirst) {
                handleFirst()
              }
            }}
          >
            First Page
          </div>
          <div
            style={currentPage <= 1 ? { color: "gray" } : { cursor: "pointer" }}
            onClick={() => {
              if (currentPage >= 2) {
                handlePrev()
              }
            }}
          >
            Prev
          </div>
          <div style={{ borderRadius: "100%" }}>{currentPage}</div>
          <div
            style={
              (currentPage + 1) * bikesPerPage < bikesToRender.length - 1
                ? { cursor: "pointer" }
                : { color: "gray" }
            }
            onClick={() => {
              if ((currentPage + 1) * bikesPerPage < bikesToRender.length - 1) {
                handleNext()
              }
            }}
          >
            Next
          </div>
          <div
            style={canClickLast ? { cursor: "pointer" } : { color: "gray" }}
            onClick={() => {
              if (canClickLast) {
                handleLast()
              }
            }}
          >
            last Page
          </div>
        </div>

        {/* <div ref={loadRef}>
          {hasMore ? <p>Loading...</p> : <p>No more results</p>}
        </div> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BikesData {
    allMysqlBikes {
      edges {
        node {
          id
          page_url
          image_url
          make
          model
          year_of_launch
          category
          rating
          power_ps
          power_rpm
        }
      }
    }
  }
`
