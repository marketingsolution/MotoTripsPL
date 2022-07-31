import { useStaticQuery, graphql } from "gatsby";

export const OldNewsQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`query OldNewsQuery {
  allWpPost(
    filter: {date: {gte: "2021-11-01"}, categories: {nodes: {elemMatch: {name: {eq: "News"}}}}}
    skip: 1
    sort: {fields: [date], order: DESC}
  ) {
    nodes {
      title
      slug
      uri
      id
      date(formatString: "DD. MM. YYYY r.")
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
              gatsbyImageData(formats: [AUTO, WEBP, AVIF],
                quality: 60,
                placeholder: BLURRED,
                )
             
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