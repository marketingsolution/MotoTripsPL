import { useStaticQuery, graphql } from "gatsby";

export const PostQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`query AllPosts {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Moto test"}}}}}
    sort: {fields: [date], order: DESC}
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
              gatsbyImageData
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