/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    author: "Vi Muzzi",
  },
  plugins: [
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET_SLUG,
        objectTypes: [`images`],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
      },
    },
  ],
}
