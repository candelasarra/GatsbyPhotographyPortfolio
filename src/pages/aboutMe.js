import React from "react"
import SideBar from "../components/SideBar"
import { Typography, ThemeProvider, createMuiTheme } from "@material-ui/core"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
const theme = createMuiTheme({
  typography: {
    fontFamily: `'Montserrat'`,
  },
})
const useStyles = makeStyles(theme => ({
  aboutMeText: {
    flex: 2,
    padding: 35,
    [theme.breakpoints.down("sm")]: {
      padding: 15,
    },
  },
  holdsTextAndImage: {
    display: "flex",
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  image: {
    width: "100%",
    flex: 3,
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      height: "20%",
      margin: 10,
    },
  },
}))

const AboutMe = ({ data }) => {
  const classes = useStyles()
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
          <div
            className={classes.holdsTextAndImage}
            style={{ display: "flex", margin: 20 }}
          >
            <div className={classes.aboutMeText}>
              <Typography variant="subtitle1">
                {data.allContentfulHomePage.nodes[0].aboutMeText.aboutMeText}
              </Typography>
            </div>
            <Img
              fluid={data.allContentfulHomePage.nodes[0].mainImage.fluid}
              style={{ width: "100%", flex: 3, borderRadius: "20px" }}
              backgroundColor="true"
              className={classes.image}
            />
          </div>
        </div>
      </SideBar>
    </ThemeProvider>
  )
}

export default AboutMe

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
        aboutMeText {
          aboutMeText
        }
      }
    }
  }
`
