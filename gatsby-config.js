/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    { resolve: `gatsby-plugin-material-ui` },
    { resolve: `gatsby-theme-material-ui` },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: "localhost",
          user: "user1",
          password: "123456789",
          database: "mototrip_db",
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
    "gatsby-plugin-use-query-params",
  ],

  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Web Warrior",
  },
}
