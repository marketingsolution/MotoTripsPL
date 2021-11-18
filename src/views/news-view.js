import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Breadcrumb from "../components/Breadcrumb"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import NewsPost from "../components/news-post-archive"
import MotoTest from "../components/post-archive"
const Lead = styled.text`

  font-size: 30px;
  font-family: Lato;
  font-style: italic;
  font-weight: 300;
  color: #919191;
  
`
const LeftColumn = styled.div`
width: 70%;
`
const RightColumn = styled.div`
width: 30%;
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

        <div className="row flex">
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
          <LeftColumn>
              <div>
                  <iframe width="100%" height="315" src={news.film} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <div dangerouslySetInnerHTML={{ __html: news.paragraph1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: news.paragraph2 }}></div>
          </ LeftColumn>
          <RightColumn>
            <MotoTest/>
          </RightColumn>
        </div>
        <div style={{padding: "50px 0"}} className="scrolling-wrapper">
         <NewsPost />
        </div>
      </main>
     
      </Layout>
     
  )
}

export default NewsView