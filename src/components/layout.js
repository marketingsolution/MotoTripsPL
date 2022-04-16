import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"
import Header from './header'
import Footer from './Footer/footer'
import "@fontsource/finger-paint"
import "@fontsource/lato"
import "@fontsource/montserrat"
import YouTube from './youtube'

const shortcodes = { YouTube }


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

      <main>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>

    <Footer />
      
    </div>
  )
}

export default Layout
