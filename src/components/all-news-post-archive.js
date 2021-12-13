import React from "react"
import { Link } from "gatsby"
import { NewsQuery } from "../hooks/all-news-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const NewsList = () => {
  
  return (
    
    NewsQuery().map((nodes, key) => {
      const image = getImage(nodes.featuredImage.node.localFile)
      
       
          return (
            
            <div className="card" key={nodes.id}>

           
            
            <Link to={nodes.link}>
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


export default NewsList