// Step 1: Import React
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import NewsPosts from '../components/news-post-archive'
import TestPosts from '../components/post-archive'
import SprzetPosts from '../components/sprzet-archive'
import Seo from '../components/seo'
import styled from "styled-components"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import FeaturedNews from '../components/featured-news'
const Main = styled.main`
transition: margin-left 300ms;
margin-left: ${({ nav }) => (nav ? "250px" : "0")};
` 

// Step 2: Define your component
const IndexPage = () => {
  
  return (
    
      <div>
      <title>Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️</title>
      <Seo
        title="Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️"
        description="Moto Trips 🌍 to portal motocyklowy w którym prezentujemy moto testy, sprzęt dla motocyklistów recenzje, opinie, a także ciekawe trasy motocyklowe. 🛣️"
      />
      
      <Main >
      <Layout>
      <div className="row">
        <h1 className="title">Moto Trips portal motocyklowy 🏍️ testy, opinie, trasy 🏕️</h1>
        
        
      </div>
      <SectionHeader txt="News" img="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"/>
        <FeaturedNews />
        <div className="scrolling-wrapper">
          <NewsPosts />
        </div>
      <SectionHeader txt="Moto Test" img="https://moto-trips.pl/wp-content/uploads/2020/06/2020_YAM_XTZ700SP_EU_SYB_ACT_005_03-77128-min.jpg"/>
      <div className="row">
        <TestPosts />
        <div  style={{textAlign:'center', margin: '50px auto'}}>
        <Link className="button" to="/moto-test">Więcej </ Link>
        </div>
      </div>
      <SectionHeader txt="Moto Graty" img="https://moto-trips.pl/wp-content/uploads/2020/06/okładka-www.jpg"/>
      
      <div className="scrolling-wrapper">
        <SprzetPosts />
      
      </div>
      </ Layout>
    </Main>
    </div>
  )
}

// Step 3: Export your component
export default IndexPage
