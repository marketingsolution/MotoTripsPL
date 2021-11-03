import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function allQueries() {
  const data = useStaticQuery(graphql`
    query allQueries {
        allWpNews {
            nodes {
              title
              slug
            }
          }
    }
  `)

  return (
    <header>
      <h1>{data.allWpNews.nodes.title}</h1>
    </header>
  )
}