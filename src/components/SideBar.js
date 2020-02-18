import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ListItem, ListItemText } from "@material-ui/core"
import ResponsiveDrawer from "./ResponsiveDrawer"
const SideBar = ({ children }) => {
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
  const sideBarLinks = data.allCosmicjsImages.nodes.map(node => {
    return (
      <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Link
          to={`/${node[`slug`]}`}
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
          <ListItemText primary={node[`slug`]} />
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
