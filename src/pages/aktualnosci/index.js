import React from "react";
import AllNewsList from "../../components/all-news-post-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import FeaturedNews from '../../components/featured-news'


const Aktualnosci = () => {
  return (
    <Layout>
      <Breadcrumb title="Aktualności"/>
      <div className="row">
      <FeaturedNews />
      
        <AllNewsList />
      </div>
    </Layout>
  );
};

export default Aktualnosci;
