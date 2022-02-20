import React from "react";
import AllNewsList from "../../components/old-news-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import Seo from "../../components/seo";
import { Link, graphql } from 'gatsby';


const Aktualnosci = ({data}) => {
  return (
    <Layout>
       <Seo
        title="Nowości ze świata motocykli adventure"
        description="Co nowego w motocyklach klasy adventure i nie tylko wpadaj na Moto Trips, Twój partner w przygodach."
        image="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"
        pathname="/aktualnosci"
      />
      <Breadcrumb title="Archiwum"/>
      <div className="row">
              
              {
                data.allMdx.nodes.map((node) => (
                  <div className="card" key={node.id}>
                    <Link to={`/news/${node.slug}`}>
                      
                      <p className="card-date">{node.frontmatter.date}</p>
                      <h3>{node.frontmatter.title.length <= 65 ? node.frontmatter.title : `${node.frontmatter.title.slice(0, 65)}...`}</h3>
                    
          
                    </Link>
                  </div>
                ))
              }
      
        <AllNewsList />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MM-DD-YYYY r.")
          title
          
        }
        id
        slug
    
      }
    }
  }
`
export default Aktualnosci;
