import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

function Home() {
  useEffect(() => {
    navigate("/katalog-motocykli")
  }, [])
  return <div>Loading...</div>
}

export default Home
