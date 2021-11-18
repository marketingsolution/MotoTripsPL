import * as React from "react";
import { graphql } from "gatsby";
import NewsView from "../../views/news-view";

function PostNews(props) {
  const { allWpPost } = props.data;
  console.log(allWpPost)
  return <NewsView news={allWpPost.nodes[0]} />;
}

export default PostNews;

export const query = graphql`
query($slug: String!) {
  allWpPost(filter: { slug: { eq: $slug } }) {
    nodes {
      id
      slug
      uri
      title
      excerpt
      paragraph1
      paragraph2
      gallery
      film
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                )
            }
          }
          }
        }
    }
  }
}
`;