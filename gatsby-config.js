/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: "Candela",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-transformer-sharp` },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    // {
    //   resolve: `gatsby-source-cosmicjs`,
    //   options: {
    //     bucketSlug: process.env.COSMIC_BUCKET_SLUG,
    //     objectTypes: [`images`],
    //     apiAccess: {
    //       read_key: process.env.COSMIC_READ_KEY,
    //     },
    //   },
    // },
  ],
}
