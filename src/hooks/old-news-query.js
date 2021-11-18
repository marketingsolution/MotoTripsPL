import { useStaticQuery, graphql } from "gatsby";

export const OldNewsQuery = () => {
    const { allWpPost } = useStaticQuery(
        graphql`
        query OldNewsQuery {
          allWpPost(
            filter: {categories: {nodes: {elemMatch: {name: {eq: "News"}}}}}
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