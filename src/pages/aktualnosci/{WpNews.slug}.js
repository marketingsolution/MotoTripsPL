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
        film
        paragraph1
        paragraph2
        gallery
        modified
        author {
          node {
            name
          }
        }
        
        date
        featuredImage {
          node {
            altText
            localFile {
              publicURL
              url
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
