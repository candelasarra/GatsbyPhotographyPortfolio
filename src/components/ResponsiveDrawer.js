import React from "react"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import signature from "../images/visignature.png"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginLeft: 10,
    marginTop: 10,
    position: "fixed",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  holdsMenuButton: {
    width: "6%",
    [theme.breakpoints.up("lg")]: {
      width: "unset",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
    backgroundColor: "rgb(236, 235, 235)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function ResponsiveDrawer(props) {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div
        style={{
          height: 170,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AniLink
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
          cover
          duration={1}
          bg="#ecebeb"
          direction="up"
        >
          {/* <Typography
          variant="h4"
          style={{
            marginLeft: 30,
            marginTop: 50,
            marginBottom: 50,
            color: "#565656",
          }}
        >
          {props.author}
        </Typography> */}
          <img src={signature} style={{ width: "50%", padding: "15px" }} />
        </AniLink>
      </div>
      <List style={{ marginTop: "15px" }}>{props.sideBarLinks}</List>
    </div>
  )

  return (
    <div className={classes.root}>
      <div className={classes.holdsMenuButton}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default ResponsiveDrawer
