import * as React from "react";
import { graphql } from "gatsby";
import PostView from "../../views/MotoTest";

function Post(props) {
  const { allWpPost } = props.data;
  console.log(allWpPost)
  
  return <PostView news={allWpPost.nodes[0]} />;
}

export default Post;

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
