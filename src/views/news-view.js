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
  const image = getImage(news.featuredImage.node.localFile.childImageSharp)
  return (
    
    <Layout>
      <Seo
        title={news.title}
        description={news.lead}
        image={image}
        pathname={news.slug}
      />
      <Breadcrumb title={news.title} path="/aktualnosci" pathName="Aktualności"/>
      <main>

        <div className="row">
         <GatsbyImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: 500,
            backgroundColor: "#e9b000",
            borderRadius: 10,
          }}
         
         alt={news.featuredImage.node.altText} image={image}
         
         />
          <Lead>

            {news.lead}
          </Lead>
          <div dangerouslySetInnerHTML={{ __html: news.paragraph1 }}></div>
          <div dangerouslySetInnerHTML={{ __html: news.paragraph2 }}></div>
        </div>
        
      </main>
     
      </Layout>
     
  )
}

export default NewsView