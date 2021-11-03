import * as React from "react"
import { graphql } from "gatsby"
import NewsView from "../../views/news-view"

function News(props) {
  const { allWpNews } = props.data
  return <NewsView news={news} />
}

export default News

export const query = graphql`
  query($id: String!) {
    allWpNews(id: { eq: $id }) {
        nodes {
        id
        uri
        title
        lead
        paragraph1
        paragraph2
        }
    }
  }
`