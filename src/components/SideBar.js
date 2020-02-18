import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
const SideBar = () => {
  const { author } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    query {
      allCosmicjsImages {
        nodes {
          slug
        }
      }
    }
  `)

  return (
    <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: "10%", color: "#565656" }}>{author}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.allCosmicjsImages.nodes.map(node => {
          return (
            <Link
              to={`/${node[`slug`]}`}
              style={{
                textDecoration: "none",
                color: "grey",
                marginTop: "7px",
                marginBottom: "7px",
                fontSize: "large",
                marginLeft: "10%",
              }}
              activeStyle={{ color: "black" }}
            >
              {node[`slug`]}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default SideBar
