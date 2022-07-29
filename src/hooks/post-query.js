import { useStaticQuery, graphql } from "gatsby";

export const PostQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`query Posts {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Moto test"}}}}}
    sort: {fields: [date], order: DESC}
    limit: 6
  ) {
    nodes {
      title
      slug
      uri
      id
      date(formatString: "MMMM DD, YYYY")
      excerpt
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF])
              gatsbyImageData(quality: 60, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`
    )
    return allWpPost.nodes
}