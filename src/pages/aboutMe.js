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
  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <SideBar>
        <div style={{ marginTop: 150, marginBottom: 150 }}>
          <Typography
            variant="h4"
            style={{ marginLeft: 55, width: "fit-content" }}
          >
            {" "}
            About Me
          </Typography>
          <div style={{ display: "flex", margin: 20 }}>
            <div style={{ flex: 1, padding: 35 }}>
              <Typography>
                
              </Typography>
            </div>
            <Img
              fluid={data.allContentfulHomePage.nodes[0].mainImage.fluid}
              style={{ width: "100%", flex: 1 }}
              backgroundColor="true"
            />
          </div>
        </div>
      </SideBar>
    </ThemeProvider>
  )
}

export default aboutMe

export const query = graphql`
  query($title: String! = "aboutMeImage") {
    allContentfulHomePage(filter: { title: { eq: $title } }) {
      nodes {
        mainImage {
          title
          fluid(maxWidth: 700) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
