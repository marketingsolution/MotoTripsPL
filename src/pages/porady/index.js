import React from "react";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const News = ({ data }) => {
  return (
    <Layout>
       <Seo
        title="Porady dla motocyklisów i nie tylko"
        description="Jesteś posiadaczem jednośladu, niezależnie od tego czy to motocykl, motorower czy skuter, znajdziesz tu porady które pomogą Ci w obsłudze rejestracji czy utrzymaniu swojego sprzętu"
        image="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"
        pathname="/porady"
      />
      <Breadcrumb title="Porady"/>
      <div className="row flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  <Link to={`/${node.frontmatter.category.toLowerCase()}/${node.slug}`}>
                  <div className="featured-news">
                  
                    <GatsbyImage
                      className="news-img"
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </div>
                  </Link>
                  <div className="featured-news">
                  <Link to={`/${node.frontmatter.category.toLowerCase()}/${node.slug}`}>
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "Porady"}}}) {
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
export default News;
