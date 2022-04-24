import { graphql, Link, navigate } from "gatsby"
import React, { useEffect, useMemo, useRef, useState } from "react"
import BikeCard from "../components/BikeCard"
import Layout from "../components/Layout"

import * as classes from "../styles/home.module.css"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import CustomeSelect from "../components/CustomeSelect"
import { Button } from "gatsby-theme-material-ui"
export default function KatalogMotorcyckli({ data, location }) {
  console.log(data)
  console.log(location)
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

  //Set a ref for the loading div
  const loadRef = useRef()

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  //Initialize the intersection observer API
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loadRef.current) {
      observer.observe(loadRef.current)
    }
  }, [])

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < bikes.length
      const nextResults = isMore
        ? bikes.slice(currentLength, currentLength + 10)
        : []

      setList([...list, ...nextResults])
      const len = list.length
      console.log(len)
      setLoadMore(false)
      //   setNum(len / 10)
      navigate(`/katalog-motocykli#?p=${len / 10}`)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

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
    // const params = new URLSearchParams(location.hash);
    const param = location?.hash.split("=")[1]
    console.log(
      { param: Number(param) },
      param,
      bikes,
      Number(param) && bikes.length
    )
    if (Number(param) && bikes.length) {
      //   alert("if")
      setList([...bikes.slice(0, Number(param) * 10)])
    }

    // console.log(params)
  }, [])

  //   console.log(getSearchParams())

  const handleChange = ev => {
    setBrandName(ev.target.value)
  }

  const bikeBrands = useMemo(() => {
    if (bikes.length) {
      const brands = bikes.map(bike => bike.node.make)
      const uniqueBrands = [...new Set(brands)]
      console.log({ uniqueBrands })
      return uniqueBrands
    } else return []
  }, [bikes])

  console.log({ brandName })

  console.log()

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
        <div ref={loadRef}>
          {hasMore ? <p>Loading...</p> : <p>No more results</p>}
        </div>
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
