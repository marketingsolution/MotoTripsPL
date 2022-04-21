import { useStaticQuery, graphql } from "gatsby";

export const PostQuery = () => {
    const { allMdx } = useStaticQuery(
        graphql`
        query LastPost {
          allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "News"}}},  limit: 1) {
            nodes {
              frontmatter {
                date(formatString: "DD-MM-YYYY r.")
                title
                author
                lead
                category
                hero_image_alt
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              id
              slug
            }
          }
    }
    `
    )
    return allMdx.nodes
}