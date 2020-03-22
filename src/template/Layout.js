import React from "react"
import SideBar from "../components/SideBar"
import { graphql } from "gatsby"
import Pages from "./Pages"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Montserrat'`,
  },
})
export default ({ data }) => {
  const slugContent = data.allContentfulPhotos
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#ecebeb",
      }}
      className="maindiv"
    >
      <ThemeProvider theme={theme}>
        <SideBar>
          <Pages slugContent={slugContent} />
        </SideBar>
      </ThemeProvider>
    </div>
  )
}

export const query = graphql`
  query Images($title: String!) {
    allContentfulPhotos(filter: { title: { eq: $title } }) {
      nodes {
        childContentfulPhotosTopicDescriptionTextNode {
          topicDescription
        }
        photo {
          description
          title
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
