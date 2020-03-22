import React from "react"
import "../styles/global.css"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Typography } from "@material-ui/core"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Montserrat'`,
  },
})

export default ({ data }) => {
  const { author } = useSiteMetadata()
  const linkTo = data.allContentfulPhotos.edges[0].node.title
  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "lightgrey" }}>
        <Img
          fluid={
            data.allContentfulHomePage.nodes[0].mainImage.localFile
              .childImageSharp.fluid
          }
          style={{ height: "100vh", overflow: "hidden" }}
        />

        <Link to={`/${linkTo}`}>
          <div
            style={{
              position: "absolute",
              color: "white",
              top: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "auto",
            }}
          >
            <Typography variant="h1">{author}</Typography>
          </div>
        </Link>
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    allContentfulHomePage {
      nodes {
        mainImage {
          title
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500, grayscale: true) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allContentfulPhotos {
      edges {
        node {
          title
        }
      }
    }
  }
`
// fluid(maxWidth: 2500, grayscale: true) {
//   ...GatsbyContentfulFluid
// }
