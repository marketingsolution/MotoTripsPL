/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const Disqus_Shortname = process.env.GATSBY_DISQUS_NAME
const MySqlUser = process.env.MySqlUser
const MySqlPassword = process.env.MySqlPassword
const MySqlHost = process.env.MySqlHost
const MySqlDatabase = process.env.MySqlDatabase

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  siteMetadata: {
    title: `Moto Trips - portal motocyklowy 🏍️ testy, opinie, trasy 🏕️`,
    titleTemplate: "%s - Moto Trips.",
    siteUrl: "https://mototrips.pl",
    image: "/logo-moto-trips.PNG",
    description: `Moto Trips 🌍 to portal motocyklowy w którym prezentujemy moto testy, sprzęt dla motocyklistów recenzje, opinie, a także ciekawe trasy motocyklowe. 🛣️`,
    author: `Moto Trips Polska`,
    twitterUsername: "@gasiopr",
  },

  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `https://moto-trips.pl/graphql`,
        schema: {
          perPage: 20,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
          timeout: 100000,
        },
        production: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: MySqlHost,
          user: MySqlUser,
          password: MySqlPassword,
          database: MySqlDatabase
        },
        queries: [
          {
            statement: "SELECT * FROM mototrip_details",
            idFieldName: "id",
            name: "bikes",
          },
          {
            statement: "SELECT * FROM users",
            // idFieldName: "id",
            name: "users",
          },
        ],
      },
    },
    { resolve: `gatsby-plugin-material-ui` },
    { resolve: `gatsby-theme-material-ui` },
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-sitemap`,
    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aktualnosci`,
        path: `${__dirname}/src/pages/aktualnosci`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `autorzy`,
        path: `${__dirname}/src/pages/autorzy`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `katalog motocykli`,
        path: `${__dirname}/src/pages/katalog-motocykli`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `moto-test`,
        path: `${__dirname}/src/pages/moto-test`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `moto-test-mdx`,
        path: `${__dirname}/src/categories/moto-test`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `news`,
        path: `${__dirname}/src/categories/news`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `porady`,
        path: `${__dirname}/src/pages/porady`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `porady-mdx`,
        path: `${__dirname}/src/categories/porady`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sprzet`,
        path: `${__dirname}/src/categories/sprzet`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tag`,
        path: `${__dirname}/src/pages/tag`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trasy-motocyklowe`,
        path: `${__dirname}/src/categories/trasy-motocyklowe`,
      },
    },


    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-zup-gatsby-image
     * if you're curious about it.
     */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              defaultLayouts: {
                default: require.resolve("./src/components/layout.js"),
              },
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: Disqus_Shortname
      }
  },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moto Trips portal motocyklowy`,
        short_name: `Moto Trips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#eb9000`,
        display: `standalone`,
        icon: `content/assets/favicon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-114936908-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T3Z5ZR7",
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    },
  ],
}
