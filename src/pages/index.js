// Step 1: Import React
import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import NewsPosts from '../components/news-post-archive'
import TestPosts from '../components/post-archive'
import SprzetPosts from '../components/sprzet-archive'
import Seo from '../components/seo'
import Header from '../components/header'
import styled from "styled-components"
import Footer from '../components/footer'

const Main = styled.main`
transition: margin-left 300ms;
margin-left: ${({ nav }) => (nav ? "250px" : "0")};
` 

// Step 2: Define your component
const IndexPage = () => {
  const [nav, showNav] = useState(false)
  return (
    
      <div>
      <title>Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️</title>
      <Seo
        title="Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️"
        description="Moto Trips 🌍 to portal motocyklowy w którym prezentujemy moto testy, sprzęt dla motocyklistów recenzje, opinie, a także ciekawe trasy motocyklowe. 🛣️"
      />
      
      <Main >
      <Header nav={nav} onClick={() => showNav(!nav)}/>
      <div className="row">
        <h1 className="title">Moto Trips portal motocyklowy 🏍️ testy, opinie, trasy 🏕️</h1>
        
        
      </div>
      <SectionHeader txt="News" img="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"/>
     
        <div className="scrolling-wrapper">
          <NewsPosts />
        </div>
      <SectionHeader txt="Moto Test" img="https://moto-trips.pl/wp-content/uploads/2020/06/2020_YAM_XTZ700SP_EU_SYB_ACT_005_03-77128-min.jpg"/>
      <div className="row">
        <TestPosts />
      </div>
      <SectionHeader txt="Moto Graty" img="https://moto-trips.pl/wp-content/uploads/2020/06/okładka-www.jpg"/>
      
      <div className="scrolling-wrapper">
        <SprzetPosts />
      
      </div>
      <Footer />
    </Main>
    </div>
  )
}

// Step 3: Export your component
export default IndexPage
