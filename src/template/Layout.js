import React from "react"
import SideBar from "../components/SideBar"
import { graphql } from "gatsby"
import Pages from "./Pages"
export default ({ data }) => {
  const slugContent = data.allCosmicjsImages.nodes[0]
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
        <Pages images={slugContent.metafields} />
      </SideBar>
    </div>
  )
}

export const query = graphql`
  query Images($slug: String!) {
    allCosmicjsImages(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        content
        metafields {
          url
          title
        }
      }
    }
  }
`
