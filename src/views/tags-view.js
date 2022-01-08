import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Breadcrumb from "../components/Breadcrumb"
import SEO from '../components/seo'
import { Link } from "gatsby"

const Lead = styled.div`

p {
  font-size: 25px;
}
font-size: 25px;
font-family: Lato;
font-style: italic;
font-weight: 300;
color: #919191;
padding-bottom: 25px;
`



function TagsView({ tag }) {
 
 
 
  return (
    
    <Layout>
     <SEO
        title={"Posty powiązane z tagiem dotyczącym"+ " " + tag.name}
        description={"Jesteś na stronie Moto Trips i zebraliśmy w tym miejscu wszystkie posty tematycznie powiązane z" + " " + tag.name}
        
        pathname={tag.slug}
        url={tag.uri}
        
     
      />
      
        <h1>Tag: {tag.name}</h1>   

    <Breadcrumb title={tag.name} path="/tag" pathName="Tag" />

      
      <main> 
        <div className="row">
          <p>Fajnie, że szukasz powiązanych postów lub po prostu przeglądasz dalej naszą stronę.<br/>Poniżej znajdziesz posty otagowane: <strong>#{tag.name}</strong></p>
         
          {tag.posts.nodes.map(post =>
           
              <><h2 key={post.id}>{post.title}</h2>
             
              <Lead dangerouslySetInnerHTML={{ __html: post.excerpt }}></Lead><Link to={post.uri} className="button">Wchodzę</Link></>
            
            )}
          
         
        </div>
        <div className="row">
        <p>Nie zapomnij zajrzeć też na naszego YouTuba, Facebooka lub Instagrama, linki w stopce na dole strony.</p>
        </div>
      </main>
     
    </Layout>
     
  )
}

export default TagsView