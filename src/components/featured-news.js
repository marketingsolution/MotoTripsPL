import React from "react"
import { Link } from "gatsby"
import { PostQuery } from "../hooks/last-post-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewsList = () => {
  
  return (
    
    PostQuery().map(function (nodes, key) {
        

       
          return (
            <div className="row" key={nodes.id}>
              <div className="flex">
                <div className="featured-news">
                  <Link to={`/${nodes.frontmatter.category.toLowerCase()}/${nodes.slug}`}>
                    <GatsbyImage image={getImage(nodes.frontmatter.hero_image)} className="news-img" alt={nodes.title} />
                  </Link>
                </div>
                <div className="featured-news" style={{ whiteSpace: `normal` }}>
                  <Link to={`/${nodes.frontmatter.category.toLowerCase()}/${nodes.slug}`}>
                    <h3>{nodes.frontmatter.title}</h3>
                    <p>{nodes.frontmatter.lead.slice(0, 300) + '...'}</p>
                  </Link>
                </div>
              </div>

            </div>
          )
        

        





      })
  )   

}


export default NewsList