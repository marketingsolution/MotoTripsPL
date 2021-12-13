import React from "react"
import { Link } from "gatsby"
import { PostQuery } from "../hooks/last-post-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const NewsList = () => {
  
  return (
    
    PostQuery().map(function (nodes, key) {
        const image = getImage(nodes.featuredImage.node.localFile)

       
          return (
            <div className="row" key={nodes.id}>
              <div className="flex">
                <div className="featured-news">
                  <Link to={nodes.uri}>
                    <GatsbyImage image={image} className="news-img" alt={nodes.title} />
                  </Link>
                </div>
                <div className="featured-news" style={{ whiteSpace: `normal` }}>
                  <Link to={nodes.uri}>
                    <h3>{nodes.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: nodes.excerpt.length <= 300 ? nodes.excerpt : nodes.excerpt.slice(0, 300) + '...' }}></p>
                  </Link>
                </div>
              </div>

            </div>
          )
        

        





      })
  )   

}


export default NewsList