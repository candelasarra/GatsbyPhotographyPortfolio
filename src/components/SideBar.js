import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ListItem, ListItemText } from "@material-ui/core"
import ResponsiveDrawer from "./ResponsiveDrawer"
import { withStyles } from "@material-ui/core/styles"

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
    return (
      <ListItem
        style={{ paddingTop: 0, paddingBottom: 0 }}
        key={edge.node.title + index}
      >
        <Link
          to={`/${edge.node.title}`}
          style={{
            textDecoration: "none",
            color: "grey",
            marginTop: "7px",
            marginBottom: "7px",
            fontSize: "large",
            marginLeft: 25,
          }}
          activeStyle={{ color: "black" }}
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
