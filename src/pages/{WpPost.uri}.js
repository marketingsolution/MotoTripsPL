import * as React from "react";
import { graphql } from "gatsby";
import PostView from "../views/news-view";

function Post(props) {
  const { allWpPost } = props.data;
  console.log(allWpPost)
  
  return <PostView news={allWpPost.nodes[0]} />;
}

export default Post;

export const query = graphql`
  query($uri: String!) {
    allWpPost(filter: { uri: { eq: $uri } }) {
      nodes {
        id
        slug
        uri
        title
        categories {
          nodes {
            name
          }
        }
        excerpt
        author {
          node {
            name
          }
        }
        paragraph1
        paragraph2
        gallery
        film
        tags {
          nodes {
            name
          }
        }
        date
        modified
        featuredImage {
          node {
            
            altText
            localFile {
              publicURL
              url
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
