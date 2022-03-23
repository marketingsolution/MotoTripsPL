import React from "react";
import Layout from "../../components/layout"


import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const Authors = ({ data }) => {
  
  return (
    <Layout>
      

      <div className="row flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  
                  <div className="featured-news">
                  
                    <StaticImage
                      className="news-img"
                      src="../../img/authors/przemek.JPG"
                      alt={node.frontmatter.display}
                    />
                  </div>
             
                  <div className="featured-news">
                
                        <h2>{node.frontmatter.display}</h2>
           
                  </div>
                 
                  
                 
                  
                  
                </article>
            ))
        }
      
        
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            id
            frontmatter {
                name
                surname
                display
                image 
                
            }
          
        }
        
         
    }
      
}
`


export default Authors;
