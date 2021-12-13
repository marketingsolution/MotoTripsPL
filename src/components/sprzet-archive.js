import React from "react"
import { PostQuery } from "../hooks/sprzet-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const SprzetList = () => {

  return (
    PostQuery().map(nodes => {
      const image = getImage(nodes.featuredImage.node.localFile)
      
     return (
        <div className="card" key={nodes.id}>

           
            
        <Link to={nodes.uri}>
        
          <GatsbyImage image={image} alt={nodes.title} className="news-img"/>
          <p className="card-date">{nodes.date}</p>
          
          
            <h3>{nodes.title.length <= 65 ? nodes.title : `${nodes.title.slice(0, 65)}...`}</h3>
        
        </Link>
        
        
    </div>
     )
    })
  )   

}


export default SprzetList
