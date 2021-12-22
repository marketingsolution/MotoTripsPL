import React from "react";
import AllNewsList from "../../components/old-news-archive";
import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import Seo from "../../components/seo";


const Aktualnosci = () => {
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
      
      
        <AllNewsList />
      </div>
    </Layout>
  );
};

export default Aktualnosci;
