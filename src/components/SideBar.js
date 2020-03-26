import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { ListItem, ListItemText } from "@material-ui/core"
import ResponsiveDrawer from "./ResponsiveDrawer"

const SideBar = ({ children }) => {
  const { author } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query {
      allContentfulList {
        nodes {
          sections
        }
      }
    }
  `)
  console.log(data)
  const sideBarLinks = data.allContentfulList.nodes[0].sections.map(
    (section, index) => {
      return (
        <ListItem
          style={{ paddingTop: 0, paddingBottom: 0, width: "fit-content" }}
          key={section + index}
        >
          <Link
            to={`/${section.replace(/\s+/g, "-").toLowerCase()}`}
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
            <ListItemText primary={section} />
          </Link>
        </ListItem>
      )
    }
  )
  return (
    <ResponsiveDrawer author={author} sideBarLinks={sideBarLinks}>
      {children}
    </ResponsiveDrawer>
  )
}
export default SideBar
