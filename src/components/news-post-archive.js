import React from "react"
import { Link } from "gatsby"
import { NewsQuery } from "../hooks/news-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const NewsList = () => {
  
  return (
    
    NewsQuery().map((nodes, key) => {
      const image = getImage(nodes.featuredImage.node.localFile)
      
        if(key === 0){
          return ( 
          <div className="row">
            <div className="flex" >
              <div className="featured-news">
              <Link to={nodes.link}>
                <GatsbyImage image={image}  className="news-img" alt={nodes.title} />
              </Link>
              </div>  
              <div className="featured-news" style={{whiteSpace: `normal`}}>
              <Link to={nodes.link}>
                <h3>{nodes.title}</h3>
                <p>{nodes.lead.length <= 300 ? nodes.lead : nodes.lead.slice(0, 300) + '...'}</p>
              </Link>
              </div>
            </div>

          </div>
          )
        } else{
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

           
      
       
     
    })
  )   

}


export default NewsList