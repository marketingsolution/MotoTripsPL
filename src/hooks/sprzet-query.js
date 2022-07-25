import { useStaticQuery, graphql } from "gatsby";

export const PostQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`query Sprzet {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Sprzęt"}}}}}
    sort: {fields: [date], order: DESC}
    limit: 4
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