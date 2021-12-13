import React from "react"
import { Link } from "gatsby" 
import { OldNewsQuery } from "../hooks/old-news-query";
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const OldNewsList = () => {
    

  return (
    
    OldNewsQuery().map(nodes => {
        const image = getImage(nodes.featuredImage.node.localFile)
        
            return (
              
              <div className="card" key={nodes.id}>
  
             
              
              <Link to={nodes.uri}>
                <div className="featured-news">
                  <GatsbyImage image={image} alt={nodes.title} className="news-img"/>
                </div>  
                <p className="card-date">{nodes.date}</p>
                
                
                  <h3>{nodes.title.length <= 65 ? nodes.title : `${nodes.title.slice(0, 65)}...`}</h3>
              
              </Link>
              
              
          </div>
            )
           
          }
  
      )   
    )
  }



export default OldNewsList

