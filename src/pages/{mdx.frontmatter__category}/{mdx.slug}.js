import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import YouTube from '../../components/youtube'



const TripPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(data.mdx.frontmatter.film)
  
    return (
        <Layout>
          <Seo
            title={data.mdx.frontmatter.title}
            description={data.mdx.frontmatter.lead} 
            image={image}
            pathname={data.mdx.frontmatter.slug}
            article
            date={data.mdx.frontmatter.date}
            modified={data.mdx.parent.modifiedTime}
            author={data.mdx.frontmatter.author}
            body={data.mdx.frontmatter.lead}
        
          />

            
            <div style={{ display: "grid" }}>
                <GatsbyImage
                style={{
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                  maxHeight: 500,
                  
                }}
                  image={image}
                  alt={data.mdx.frontmatter.hero_image_alt}
                  formats={["auto", "webp", "avif"]}
                  aspectRatio={3 / 1}
                  layout="fullWidth"
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

                <h1>{data.mdx.frontmatter.title}</h1>
              </div>
            </div>    
            <Breadcrumb title={data.mdx.frontmatter.title} path={`/${data.mdx.frontmatter.category.replace(" ", "-").toLowerCase()}`} pathName={data.mdx.frontmatter.category} />
            
          
            
            <div className="row flex">
              <div className='left-column'>
                <p className='lead'>{data.mdx.frontmatter.lead}</p>
                <YouTube src={data.mdx.frontmatter.film} />
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
              </div>
           <div className='right-column'></div>
            </div>
        </Layout>
    )
}


export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      slug
      frontmatter {
        title
        author
        lead
        category
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        date(formatString: "MMMM D, YYYY")
        
      }
      parent {
        id
        ... on File {
          id
          name
          modifiedTime
        }
      }
      body
    }
  }
`
export default TripPost