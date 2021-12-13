import { useStaticQuery, graphql } from "gatsby";

export const TagsQuery = () => {
    const { allWpTag } = useStaticQuery(
        graphql`
        query Tags {
          allWpTag {
            nodes{
              name
              id
              uri
            }
        
            }
          }
          
            
        `
    )
    return allWpTag.nodes
}