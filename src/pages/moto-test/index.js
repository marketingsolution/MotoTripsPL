import React from "react";
import AllPostList from "../../components/all-post-archive";
import Layout from '../../components/layout'
import Breadcrumb from "../../components/Breadcrumb";
import Seo from "../../components/seo";
import { Helmet } from "react-helmet";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby";

const Aktualnosci = ({ data }) => {
  return (
    <Layout>
      <Breadcrumb title="Testy Motocykli"/>
      <Helmet >
      <script type='application/ld+json'>
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Start",
              "item": "https://mototrips.pl/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Testy motocykli"
            }]
      
          }
          
          
          `}
        </script>
      </Helmet>
      <Seo
        title="Testy motocykli, Moto Trips, portal z testami motocykowymi"
        description="Niezależny portal motocyklowy, rzetelne testy motocykli nie tylko"
        image="https://moto-trips.pl/wp-content/uploads/2020/06/2020_YAM_XTZ700SP_EU_SYB_ACT_005_03-77128-min.jpg"
        pathname="/moto-test/"
      />
      <div className="row">
        <p>Zapraszam do strony z naszymi moto testami, warto tu zajrzeć, żeby pomóc sobie wyrobić zdanie na temat wybranych motocykli. Znajdziesz tu przegląd różnych modeli i marek, głównie jednak związanych z szeroko pojętą turystyką motocyklową. Testuję motocykle przez pryzmat ich przydatności do jazdy w trasie i lekko trudnym terenie.

        Co mogę powiedzieć o sobie? Nie mam dużego doświadczenia raptem przejechane kilka tysięcy kilometrów. Co z tego wynika dla jakości testów? Dla jednych będzie to zaleta takich moto testów dla innych wada. Z pewnością bliżej będzie do moich testów motocykli osobom z mniejszym doświadczeniem niż większym.
        </p>
      </div>
      <div className="row flex">
        {
            data.allMdx.nodes.map((node) => (
             
                <article key={node.id}>
                  <Link to={`/moto-test/${node.slug}`}>
                  <div className="featured-news">
                  
                    <GatsbyImage
                      className="news-img"
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </div>
                  </Link>
                  <div className="featured-news">
                  <Link to={`/moto-test/${node.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                  </Link>
                   
                    <p>{node.frontmatter.lead}</p>
                    <div className="bio">
                    
                   
                    <p>{node.frontmatter.author}</p>
                   
                  </div>
                  </div>
                  
                 
                  
                  
                </article>
            ))
        }
      
        
      </div>
      <AllPostList />
      <div className="row">
        <h2>Testowane motocykle</h2>
        <p>
        Miełem już okazję sprawdzić wiele modeli i marek od <strong>BMW</strong>, przez <strong>Triumpha</strong> na Hondzie kończąc. Wynikiem tych testów po pierwszym sezonie zdecydowałem się na zakup pierwszego motocykla. W moim przypadku padło na Hondę NC750X w DCT. Siłą rzeczy wiele z tych testów będzie w nawiązaniu i odniesieniu do tego jak prowadzi się właśnie ten model.

        Wiem jak dużo czasu potrzeba aby przetestować wymarzone motocykle. Wybranie się do dealera, umówienie jazdy, często w różnych krańcach miasta. Następnie wybranie idealnej promocji oferty dla siebie, dlatego postanowiłem przyjść wam z pomocą. Staram się aby materiały pojawiały się dosyć regularnie. (Przynajmniej w sezonie)

        Możecie się spodziewać kolejnych testów mniej więcej dwa razy w miesiącu. Mam nadzieję publikowane <strong>moto testy pomogą wam w wyborze pierwszego motocykla</strong>. Czy przesiadce z mniejszej pojemności na większą. Do zobaczenia na trasie!
        </p>
      </div>
    </Layout>
  );
};
export const query = graphql`
query {
    allMdx(
      filter: {frontmatter: {category: {in: "Moto Test"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ){
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
export default Aktualnosci;
