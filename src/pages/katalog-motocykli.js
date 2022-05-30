import { graphql, Link, navigate } from "gatsby"
import React, { useEffect, useMemo, useRef, useState } from "react"
import BikeCard from "../components/BikeCard"
import Layout from "../components/Layout"

import * as classes from "../styles/home.module.css"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import CustomeSelect from "../components/CustomeSelect"
import { Button } from "gatsby-theme-material-ui"
export default function KatalogMotorcyckli({ data, location }) {
  // console.log(data)
  // console.log(location)

  const bikesPerPage = 24
  const [num, setNum] = useQueryParam("p", NumberParam)
  // const { title, description } = data.site.siteMetadata
  const [brandName, setBrandName] = useState("")

  const bikes = data.allMysqlBikes.edges
  // State for the list
  const [list, setList] = useState([...bikes.slice(0, 10)])

  // State to trigger oad more

  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(bikes.length > 10)

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

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < bikes.length
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
    const sliceFrom = paramNum * bikesPerPage
    console.log({ sliceFrom })

    const sliceTo = sliceFrom + bikesPerPage
    setIsMore(sliceFrom < bikes.length)
    console.log({ sliceTo })
    setList(bikes.slice(sliceFrom, sliceTo))
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
    if (bikes.length) {
      const brands = bikes.map(bike => bike.node.make)
      const uniqueBrands = [...new Set(brands)]
      // console.log({ uniqueBrands })
      return uniqueBrands
    } else return []
  }, [bikes])

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

    // console.log({ param: Number(param) }, param, bikes)
    // const currentLength = list.length
    const isMore = sliceFrom < bikes.length
    setIsMore(isMore)
    console.log({ isMore })

    // if (isMore) {
    console.log(sliceFrom, sliceTo)

    setList(bikes.slice(sliceFrom, sliceTo))
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

    // console.log({ param: Number(param) }, param, bikes)
    // const currentLength = list.length
    const isMore = sliceFrom < bikes.length
    console.log({ isMore })
    setIsMore(isMore)

    if (isMore) {
      // console.log(sliceFrom, sliceTo)

      setList(bikes.slice(sliceFrom, sliceTo))
      // setCurrentPage(paramNum)
      // if (paramNum === 1) {
      //   navigate(`/katalog-motocykli`)
      // } else {
      navigate(`/katalog-motocykli#?p=${paramNum}`)
      // }
    }
  }

  console.log({ length: bikes.length })

  useEffect(() => {
    const param = location?.hash.split("=")[1]

    const paramNum = Number(param) ? Number(param) : 1

    setCurrentPage(paramNum)
  }, [location?.hash])

  console.log(currentPage, bikesPerPage, bikes.length)

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <div>Filter by brand</div>
          <CustomeSelect
            data={bikeBrands.map(brand => ({ name: brand, id: brand }))}
            title="Brand"
            value={brandName}
            name="brand"
            handleChange={handleChange}
          />
          {/* <div>here</div> */}
          <Button
            // color=""
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
        </div>
        <div className={classes.container}>
          {list.map(el => {
            return <BikeCard key={el.node.id} data={el.node} />
          })}
        </div>

        <div className={classes.footer}>
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
              (currentPage + 1) * bikesPerPage < bikes.length - 1
                ? { cursor: "pointer" }
                : { color: "gray" }
            }
            onClick={() => {
              if ((currentPage + 1) * bikesPerPage < bikes.length - 1) {
                handleNext()
              }
            }}
          >
            Next
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
