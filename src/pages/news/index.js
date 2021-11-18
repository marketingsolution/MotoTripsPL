import React from "react";
import AllNewsList from "../../components/old-news-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'



const Aktualnosci = () => {
  return (
    <Layout>
      <Breadcrumb title="Aktualności"/>
      <div className="row">
      
      
        <AllNewsList />
      </div>
    </Layout>
  );
};

export default Aktualnosci;
