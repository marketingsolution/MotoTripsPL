import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"




const NewsIndex = () => (
  <StaticQuery
  query={graphql` 
      query News {
        allWpNews {
          
              nodes {
                id
                title
                lead
                uri
                featuredImage {
                  node {
                    link
                    altText
                    uri
                    localFile {
                    
                    }
                  }
                }
              }
            
          }
      }
     `
}



  render={data => (
    
    <div className="row">
    
      <div>
        <h3>{data.allWpNews.nodes[0].title}</h3>

        <p>{data.allWpNews.nodes[0].lead}</p>
        <a className="button" href={data.allWpNews.nodes[0].uri}>Więcej</a>
      </div>

      <div>
        <h3>{data.allWpNews.nodes[1].title}</h3>
        <p>{data.allWpNews.nodes[1].lead}</p>
      </div>

      <div>
        <h3>{data.allWpNews.nodes[2].title}</h3>
        <p>{data.allWpNews.nodes[2].lead}</p>
      </div>

      <div>
        <h3>{data.allWpNews.nodes[3].title}</h3>
        <p>{data.allWpNews.nodes[3].lead}</p>
      </div>
    
    </div>
    
  )}
  />
  
);

export default NewsIndex

