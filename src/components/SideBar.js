import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ListItem, ListItemText } from "@material-ui/core"
import ResponsiveDrawer from "./ResponsiveDrawer"

const SideBar = ({ children }) => {
  const { author } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhotos {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  const sideBarLinks = data.allContentfulPhotos.edges.map((edge, index) => {
    const linkString = edge.node.title
    return (
      <ListItem
        style={{ paddingTop: 0, paddingBottom: 0, width: "fit-content" }}
        key={edge.node.title + index}
      >
        <Link
          to={`/${linkString.replace(/\s+/g, "-").toLowerCase()}`}
          style={{
            textDecoration: "none",
            color: "grey",
            marginTop: "7px",
            marginBottom: "7px",
            fontSize: "large",
            //    marginLeft: 25,
          }}
          activeStyle={{
            color: "darkslategray",
          }}
        >
          <ListItemText primary={edge.node.title} />
        </Link>
      </ListItem>
    )
  })
  return (
    <ResponsiveDrawer author={author} sideBarLinks={sideBarLinks}>
      {children}
    </ResponsiveDrawer>
  )
}
export default SideBar
