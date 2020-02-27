import React from "react"
import SideBar from "../components/SideBar"
import { graphql } from "gatsby"
import Pages from "./Pages"
export default ({ data }) => {
  const slugContent = data.allContentfulPhotos.nodes[0]
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#ecebeb",
      }}
      className="maindiv"
    >
      <SideBar>
        <Pages slugContent={slugContent} />
      </SideBar>
    </div>
  )
}

export const query = graphql`
  query Images($title: String!) {
    allContentfulPhotos(filter: { title: { eq: $title } }) {
      nodes {
        photo {
          title
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
