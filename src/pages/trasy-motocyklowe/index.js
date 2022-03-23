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
        title="Trasy motocklowe zaplanuj swój wyjazd razem z nami"
        description="Mamy wiele pomysłów na ciekawe spędzenie czasu na dwóch kółkach. Sprawdź co zobaczyć podczas swojej następnej wyprawy motocyklowej."
        image="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"
        pathname="/aktualnosci"
      />
      <Breadcrumb title="Trasy"/>
      <div className="row flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  <Link to={`/trasy-motocyklowe/${node.slug}`}>
                  <div className="featured-news">
                  
                    <GatsbyImage
                      className="news-img"
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </div>
                  </Link>
                  <div className="featured-news">
                  <Link to={`/trasy-motocyklowe/${node.slug}`}>
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "DD-MM-YYYY r.")
            title
            author
            lead
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
