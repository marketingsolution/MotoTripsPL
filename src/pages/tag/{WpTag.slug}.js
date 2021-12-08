import * as React from "react";
import { graphql } from "gatsby";
import TagsView from "../../views/tags-view";

function Tags(props) {
  const { allWpTag } = props.data;
 
  return <TagsView tag={allWpTag.nodes[0]} />;
}

export default Tags;

export const query = graphql`
  query($slug: String!) {
    allWpTag(filter: { slug: { eq: $slug } }) {
      nodes {
        name
        slug
       id
        posts {
          nodes {
            title
            excerpt
            id
            uri
          }
        }
      }
        
          
        
      
    }
  }
`;
