/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

export const siteMetadata = {
  author: "Vi Muzzi",
}
export const plugins = [
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
]
