import React from "react"
import Dialog from "@material-ui/core/Dialog"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme, withStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     width: "80%",
//     maxHeight: 435,
//   },
// }))

const StyledDialog = withStyles({
  root: {
    background: "rgba(0, 0, 0, 0.7490196078431373)",
  },
  paper: {
    width: "60%",
    height: "fit-content",
  },
})(Dialog)

export default function DialogPhoto({ children, image }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={handleClickOpen}>{children}</div>
      <StyledDialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Img fluid={image} />
      </StyledDialog>
    </div>
  )
}
