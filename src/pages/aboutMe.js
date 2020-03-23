import React from "react"
import SideBar from "../components/SideBar"
import { Typography, ThemeProvider, createMuiTheme } from "@material-ui/core"
import Img from "gatsby-image"

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Montserrat'`,
  },
})

const aboutMe = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <SideBar>
        <Typography>hi</Typography>
        <Img
          fluid={
            data.allContentfulHomePage.nodes[0].mainImage.localFile
              .childImageSharp.fluid
          }
          style={{ height: "100vh", overflow: "hidden" }}
          backgroundColor="true"
        />
      </SideBar>
    </ThemeProvider>
  )
}

export default aboutMe

export const query = graphql`
  query($title: String! = "aboutMe") {
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
  }
`
