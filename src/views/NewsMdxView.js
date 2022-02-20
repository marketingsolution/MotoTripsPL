import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Breadcrumb from "../components/Breadcrumb"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import NewsPost from "../components/news-post-archive"
import MotoTest from "../components/recomendetMotoTest"
import YouTube from "../components/youtube"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from "gatsby"
import parse from "html-react-parser"

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
const LeftColumn = styled.div`
  @media (min-width: 1025px) {
    width: 70%;
    padding: 0 25px;
    p {
      color: #919191;
    }
    ul {
      color: #919191;
      padding: 10px 50px;
    }
  }
  width: 95%;
  margin: 0 auto;
  p {
    color: #919191;
  }
  ul,
  ol {
    color: #919191;
    padding: 5px 0 5px 5%;
  }
  table {
    color: #919191;
  }
`
const RightColumn = styled.div`
  @media (min-width: 1025px) {
    width: 30%;
    display: block;
    padding-top: 100vh;
  }
  display: none;
`
const Tags = styled.div`
  display: inline-block;
  border: 1px solid #e9b000;
  border-radius: 25px;
  width: auto;
  color: #919191;
  padding: 7px 17px;
  margin: 20px;
  font-size: 14px;
  transition: background-color 0.6s ease-in, box-shadow 0.3s ease-out;
  :hover {
    color: #e9b000;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px #eb9000;
  }
`

function NewsView({ news }) {
  console.log(news.gallery)
  console.log(news.title)
  const image = getImage(news.featuredImage.node.localFile.childImageSharp)
  const datePublished = news.date
  return (
    <Layout>
      <Seo
        article
        title={news.title}
        description={news.excerpt.slice(3, 135)}
        image={news.featuredImage.node.localFile.url}
        pathname={news.slug}
        url={news.uri}
        date={news.date}
        modified={news.modified}
        author={news.author.node.name}
        body={news.paragraph1}
        tag={news.tags.nodes.map(tag => tag.name)}
      />

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
          id="FeaturedImage"
          formats={["auto", "webp", "avif"]}
        />
        <div
          className="layer"
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
      <Breadcrumb title={news.title} path="/moto-test" pathName="Moto Test" />

      <main>
        {" "}
        <div className="row flex">
          <LeftColumn>
            <Lead dangerouslySetInnerHTML={{ __html: news.lead }} />

            <MDXRenderer>
                {news.body}
            </MDXRenderer>

          
          </LeftColumn>
          <RightColumn>
            <MotoTest />
          </RightColumn>
        </div>
        <div style={{ padding: "50px 0" }} className="scrolling-wrapper">
          <NewsPost />
        </div>
      </main>
    </Layout>
  )
}

export default NewsView
