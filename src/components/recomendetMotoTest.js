import React from "react"
import { Link } from "gatsby"
import { PostQuery } from "../hooks/post-query"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Card = styled.div`

    margin-bottom: 20px;
    border-radius: 12px;
    
    box-shadow: 0px 0px 10px 1px #EB9000;

`
const Layer = styled.div`
    background-color: rgba(53, 53, 52, 0.411);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;

   :hover{
        background-color: rgba(25, 25, 25, 0.87);
        transition: background-color 500ms;
    }
`
const PostList = () => {

  return (
  

    PostQuery().map(nodes => {
      const image = getImage(nodes.featuredImage.node.localFile)
      
     return (
        <Card key={nodes.id}>
          <Link style={{textDecoration: 'none'}} to={nodes.uri} >
         
<div style={{ display: "grid" }}>
{/* You can use a GatsbyImage component if the image is dynamic */}
<GatsbyImage
  style={{
    gridArea: "1/1",
    // You can set a maximum height for the image, if you wish.
    maxHeight: 500,
    backgroundColor: "#e9b000",
    borderRadius: 12,
   
  }}
  layout="fullWidth"
  // You can optionally force an aspect ratio for the generated image
  aspectRatio={3 / 1}
  // This is a presentational image, so the alt should be an empty string
  alt={nodes.featuredImage.node.altText} 
  // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
  image={image}
  formats={["auto", "webp", "avif"]}
/>
<Layer
  style={{
    // By using the same grid area for both, they are stacked on top of each other
    gridArea: "1/1",
    position: "relative",
    // This centers the other elements inside the hero component
    placeItems: "center",
    display: "grid",
    
  }}
>
  {/* Any content here will be centered in the component */}
  <h3 style={{color: "#d7d7d7", padding: 15, textAlign: "center"}}>{nodes.title}</h3>
</Layer>
</div> 
            </Link>
          </Card>
     )
    })
     
  )   
 
}


export default PostList
