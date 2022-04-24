import { graphql, Link, navigate } from "gatsby"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

import BikeCard from "../components/catalog/BikeCard"
import Layout from "../components/Layout"
import * as classes from "../styles/home.module.css"
import CustomeSelect from "../components/catalog/CustomeSelect"

export default function KatalogMotorcyckli({ data, location }) {
  console.log(data)
  console.log(location)
  const [num, setNum] = useQueryParam("p", NumberParam)
  // const { title, description } = data.site.siteMetadata
  const [yearOfLaunch, setYearOfLaunch] = useState("")

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

  //   console.log(getSearchParams())

  const handleChange = ev => {
    setYearOfLaunch(ev.target.value)
  }

  const bikeYears = useMemo(() => {
    if (bikes.length) {
      const years = bikes.map(bike => bike.node.year_of_launch)
      const uniqueYears = [...new Set(years)]
      console.log({ uniqueYears })
      return uniqueYears
    } else return []
  }, [bikes])

  // console.log({ yearOfLaunch })

  // console.log()

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <div>
          <CustomeSelect
            data={bikeYears.map(year => ({ name: year, id: year }))}
            title="Year of Launch"
            value={yearOfLaunch}
            name="year_of_launch"
            handleChange={handleChange}
          />
        </div> */}

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
  query YearBikePage(
    $brandName: String
    $modelName: String
    $yearOfLaunch: Int
    $capacity: String
  ) {
    allMysqlBikes(
      filter: {
        make: { eq: $brandName }
        model: { eq: $modelName }
        year_of_launch: { eq: $yearOfLaunch }
        power_rpm: { eq: $capacity }
      }
    ) {
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