import React from "react";
import Layout from "../../components/layout"
import Breadcrumb from "../../components/Breadcrumb";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const Trasy = ({ data }) => {
  
  return (
    <Layout>
       <Seo
        title="Sprzęt dla motocyklistów to co niezbędne plus masa dodatów"
        description="W tej sekcji prezentujemy testy sprzętu dla motocyklistów, kurtki, buty czy bielizna wszystko czego potrzebujesz."
        image="https://moto-trips.pl/wp-content/uploads/2020/06/okładka-www.jpg"
        pathname="/sprzet"
      />
      <Breadcrumb title="Sprzęt"/>
      <div className="row flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  <Link to={`/sprzet/${node.slug}`}>
                  <div className="featured-news">
                  
                    <GatsbyImage
                      className="news-img"
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </div>
                  </Link>
                  <div className="featured-news">
                  <Link to={`/sprzet/${node.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                  </Link>
                    <p className="card-date">{node.frontmatter.date}</p>
                    <p>{node.frontmatter.lead}</p>
                    <div className="bio">
                    
                   
                    <p>{node.frontmatter.author}</p>
                   
                  </div>
                  </div>
                  
                 
                  
                  
                </article>
            ))
        }
      
        
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "Sprzęt"}}}) {
        nodes {
          frontmatter {
            date(formatString: "DD-MM-YYYY r.")
            title
            author
            lead
            category
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
          slug
        }
      }
}
`


export default Trasy;
