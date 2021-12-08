import React from "react";
import AllNewsList from "../../components/all-news-post-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import FeaturedNews from '../../components/featured-news'
import { Link } from "gatsby";
import Seo from "../../components/seo";

import OldNews from '../../components/old-news-archive'
const Aktualnosci = () => {
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
        <OldNews />
        <AllNewsList />
      
      </div>
      <div className="row">

      <Link className="button" to="/news">Starsze aktualności</Link>

      </div>
    </Layout>
  );
};

export default Aktualnosci;
