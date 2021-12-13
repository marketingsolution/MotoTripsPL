import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from './header'
import Footer from './footer'
import "@fontsource/finger-paint"
import "@fontsource/lato"
import "@fontsource/montserrat"

const Layout = ({ isHomePage, children }) => {
 useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
    <Header />

      <main>{children}</main>

    <Footer />
      
    </div>
  )
}

export default Layout
