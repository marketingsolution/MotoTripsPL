import { useStaticQuery, graphql } from "gatsby";

export const PostQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`
        query LastPost {
          allWpPost(
            
            filter: {categories: {nodes: {elemMatch: {name: {ne: "Moto test"}}}}}
            sort: {fields: [date], order: DESC}
            limit: 1
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
                        gatsbyImageData(
                          formats: [AUTO, WEBP, AVIF]
                          )
                        fluid(quality: 60) {
                          src
                        }
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