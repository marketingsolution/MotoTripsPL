import React from "react";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import FeaturedNews from '../../components/featured-news'
import { Link, graphql } from "gatsby";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import OldNews from '../../components/old-news-archive'
const Aktualnosci = ({ data }) => {
  return (
    <Layout>
        <Seo
        title="Aktualności ze świata motocykli"
        description="Zapraszamy niezależny portal motocyklowy newsy ze świata moto. Co nowego w motocyklach"
        image="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"
        pathname="/aktualnosci/"
        author="Przemysław Gąsiorowski"
      />
      <Breadcrumb title="Aktualności"/>
     
      <div className="row">
      <FeaturedNews />
      <div className="flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  <Link to={`/news/${node.slug}`}>
                  <div className="featured-news">
                  
                    <GatsbyImage
                      className="news-img"
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </div>
                  </Link>
                  <div className="featured-news">
                  <Link to={`/news/${node.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                  </Link>
                   
                    <p>{node.frontmatter.metaDescription}</p>
                    
                  </div>
                  
                 
                  
                  
                </article>
            ))
        }
      
        
      </div>

        <OldNews />
       
      
      </div>
      
    </Layout>
  );
};

export const query = graphql`
query {
    allMdx(
      filter: {frontmatter: {category: {in: "News"}}}
      sort: {fields: frontmatter___date, order: DESC}
      skip: 1)
      {
        nodes {
          frontmatter {
            date(formatString: "DD-MM-YYYY r.")
            title
            author
            lead
            metaDescription
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
export default Aktualnosci;
