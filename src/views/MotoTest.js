import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Breadcrumb from "../components/Breadcrumb"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Lead = styled.text`

font-size: 30px;
font-family: Lato;
font-style: italic;
font-weight: 300;
color: #919191;
`

function NewsView({ news }) {
  console.log(news.tags)
  const image = getImage(news.featuredImage.node.localFile.childImageSharp)
  return (
    
    <Layout>
       <Seo
        title={news.title}
        description={news.lead}
        image={image}
        pathname={news.slug}
      />
      <Breadcrumb title={news.title} path="/moto-test" pathName="Moto Test" />



      <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <GatsbyImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
          backgroundColor: "#e9b000",
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt={news.featuredImage.node.altText} 
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        image={image}
        formats={["auto", "webp", "avif"]}
      />
      <div className="layer"
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
        <h1>{news.title}</h1>
      </div>
    </div>



      
      <main> <div className="row">
     
        <Lead dangerouslySetInnerHTML={{ __html: news.excerpt }}/>
        <div dangerouslySetInnerHTML={{ __html: news.paragraph1 }}></div>
        <div dangerouslySetInnerHTML={{ __html: news.paragraph2 }}></div>
      
        {news.tags.nodes.map(tag => <p key={tag.id}>{tag.name}</p>)}
     
        </div>
      </main>
     
    </Layout>
     
  )
}

export default NewsView