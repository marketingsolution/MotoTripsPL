/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    siteLanguage,
    author,
    headline,
    defaultModified,
    defaultDate,
    
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
    date: defaultDate,
    modified: defaultModified,
  }

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Organization',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: author,
    },
    copyrightYear: `${new Date().getFullYear()}`,
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: defaultDate,
    dateModified: defaultModified,
    image: {
      '@type': 'ImageObject',
      url: `${seo.image}`,
    },
  }
 // Initial breadcrumb list

 const itemListElement = [
  {
    '@type': 'ListItem',
    item: {
      '@id': siteUrl,
      name: 'Homepage',
    },
    position: 1,
  },
]

let schemaArticle = null

if (article) {
  schemaArticle = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: "Moto Trips Polska",
    },
    copyrightYear: `${new Date().getFullYear()}`,
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
      logo: {
        '@type': 'ImageObject',
        url: 'https://mototrips.pl/static/3a318c3fbc235dfdb4453010eac8efc8/8f0cc/logo-kontra.webp',
      },
    },
    datePublished: defaultDate,
    dateModified: defaultModified,
    description: seo.description,
    headline: seo.title,
    inLanguage: siteLanguage,
    url: seo.url,
    name: seo.title,
    image: {
      '@type': 'ImageObject',
      url: seo.image,
    },
    mainEntityOfPage: seo.url,
  }
  // Push current blogpost into breadcrumb list
  itemListElement.push({
    '@type': 'ListItem',
    item: {
      '@id': seo.url,
      name: seo.title,
    },
    position: 2,
  })
}

const breadcrumb = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  description: 'Breadcrumbs list',
  name: 'Breadcrumbs',
  itemListElement,
}

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}


     
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  date: PropTypes.string,
  modified: PropTypes.string,
  pathname: PropTypes.string,
}
SEO.defaultProps = {
  title: `Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️`,
  description: `Moto Trips 🌍 to portal motocyklowy w którym prezentujemy moto testy, sprzęt dla motocyklistów recenzje, opinie, a także ciekawe trasy motocyklowe. 🛣️`,
  image: "/logo-moto-trips.PNG",
  article: false,
  date: null,
  modified: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        author
      }
    }
  }
`