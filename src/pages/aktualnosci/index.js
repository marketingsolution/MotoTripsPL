import React from "react";
import NewsList from "../../components/news-post-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'

const Aktualnosci = () => {
  return (
    <Layout>
      <Breadcrumb title="Aktualności"/>
      <div className="row">
        <NewsList />
      </div>
    </Layout>
  );
};

export default Aktualnosci;
