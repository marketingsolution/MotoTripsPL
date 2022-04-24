import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import * as classes from "../styles/navbar.module.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  console.log(title)

  return (
    <div className={classes.container}>
      <h1>
        <div>MOTO</div> <div>TRIPS</div>{" "}
      </h1>
      <nav className={classes.nav}>
        <Link to="/katalog-motocykli">Motorcycle Catalog</Link>
      </nav>
    </div>
  )
}
