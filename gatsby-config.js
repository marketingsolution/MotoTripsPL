/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const MySqlUser = process.env.MySqlUser
const MySqlPassword = process.env.MySqlPassword
const MySqlHost = process.env.MySqlHost
const MySqlDatabase = process.env.MySqlDatabase

module.exports = {
  /* Your site config here */
  plugins: [
  
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
    "gatsby-plugin-use-query-params",
  ],

  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Web Warrior",
  },
}
