import * as React from "react";
import { graphql } from "gatsby";
import NewsView from "../../views/news-view";

function News(props) {
  const { allWpNews } = props.data;
  console.log(allWpNews)
  return <NewsView news={allWpNews.nodes[0]} />;
}

export default News;

export const query = graphql`
  query($slug: String!) {
    allWpNews(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        uri
        title
        lead
        paragraph1
        paragraph2
        gallery
        date(formatString: "DD.MM.YYYY r.")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
            }
          }
      }
    }
  }
`;
