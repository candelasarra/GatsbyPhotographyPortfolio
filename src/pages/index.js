import React, { useEffect, useState } from "react"
import "../styles/global.css"
import Img from "gatsby-image"
import { graphql } from "gatsby"
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
  console.log(data)
  useEffect(() => {
    setLoaded(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "lightgrey" }}>
        <Img
          fluid={
            data.allContentfulHomePage.nodes[0].mainImage.localFile
              .childImageSharp.fluid
          }
          style={{ height: "100vh", overflow: "hidden" }}
          backgroundColor="true"
        />

        <AniLink to={`/${linkTo}`} fade duration={0.5}>
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
            {loaded && <Typography variant="h1">{author}</Typography>}
          </div>
        </AniLink>
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
