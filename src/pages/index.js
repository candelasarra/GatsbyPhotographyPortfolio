import React, { useEffect, useState } from "react"
import "../styles/global.css"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Typography } from "@material-ui/core"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: `Montserrat`,
  },
})

export default ({ data }) => {
  const [loaded, setLoaded] = useState(false)
  const { author } = useSiteMetadata()
  const linkTo = data.allContentfulPhotos.edges[0].node.title
    .replace(/\s+/g, "-")
    .toLowerCase()
  useEffect(() => {
    setLoaded(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "lightgrey" }}>
        <AniLink to={`/${linkTo}`} fade duration={1}>
          <Img
            fluid={
              data.allContentfulHomePage.nodes[0].mainImage.localFile
                .childImageSharp.fluid
            }
            style={{ height: "100vh", overflow: "hidden" }}
            backgroundColor="true"
          />

          <div
            style={{
              position: "absolute",
              color: "white",
              top: "0",
              width: "fit-content",

              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              cursor: "auto",
              flexDirection: "column",
              margin: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {loaded && <Typography variant="h3">{author}</Typography>}
              {loaded && (
                <Typography variant="h5" style={{ marginBottom: "50px" }}>
                  photography portfolio example
                </Typography>
              )}
            </div>
          </div>
        </AniLink>
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($title: String! = "mainImage") {
    allContentfulHomePage(filter: { title: { eq: $title } }) {
      nodes {
        mainImage {
          title
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500, grayscale: true) {
                ...GatsbyImageSharpFluid_tracedSVG
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
