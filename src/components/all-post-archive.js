import React from "react"
import { Link } from "gatsby"
import { PostQuery } from "../hooks/all-post-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const PostList = () => {

  return (
    PostQuery().map(nodes => {
      const image = getImage(nodes.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
      
     return (
        <div className="row" key={nodes.id}>
          <Link style={{textDecoration: 'none'}} to={nodes.uri} >
          <div className="flex post-list-item">
            
                
              <div className="featured-news">
                <GatsbyImage image={image} className="news-img" alt={nodes.title} />
              </div>
              <div className="featured-news">
                  <h3>{nodes.title}</h3>
                  
                  <p dangerouslySetInnerHTML={{ __html: nodes.excerpt.slice(0, 200) }}/>
                  <div className="bio">
                    
                    <img alt={nodes.author.node.name} className="bio-avatar" src={nodes.author.node.avatar.url} />
                    <p>{nodes.author.node.name}</p>
                  </div>
              </div>
            
              
            </div> 
            </Link>
          </div>
     )
    })
  )   

}


export default PostList
