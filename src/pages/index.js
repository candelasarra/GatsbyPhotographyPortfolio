import React from "react"
import "../styles/global.css"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const linkTo = data.allContentfulPhotos.edges[0].node.title
  console.log(data)
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Link to={`/${linkTo}`}>
        <Img
          fluid={data.allContentfulHomePage.nodes[0].mainImage.fluid}
          style={{ height: "100vh", overflow: "hidden", cursor: "auto" }}
        />
      </Link>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulHomePage {
      nodes {
        mainImage {
          title
          fluid(maxWidth: 2500) {
            ...GatsbyContentfulFluid
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
