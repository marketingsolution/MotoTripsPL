import React from "react"
import { Link } from "gatsby"
import { TagsQuery } from "../hooks/tags"




const TagsList = () => {

  return (
    TagsQuery().map(nodes => {
     
      
     return (
        <div style={{display: "inline-block"}} key={nodes.id}>
          <Link className="tag" to={nodes.uri}>{nodes.name}</Link>
          </div>
     )
    })
  )   

}


export default TagsList
