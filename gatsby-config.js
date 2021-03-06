/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
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
        url:
          process.env.WPGRAPHQL_URL ||
          `https://moto-trips.pl/graphql`,
          
      },
    },

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
        name: `moto test`,
        path: `${__dirname}/src/pages/moto-test`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trasy`,
        path: `${__dirname}/src/pages/trasy-motocyklowe`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sprzet`,
        path: `${__dirname}/src/pages/sprzet`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-zup-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
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
    }
  ],
}
