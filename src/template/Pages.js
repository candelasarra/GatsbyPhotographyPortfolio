import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import DialogPhoto from "../components/DialogPhoto"
import useWindowSize from "../hooks/useWindowSize"

const Pages = ({ slugContent }) => {
  const windowSize = useWindowSize()
  const windowWidth = windowSize.innerWidth < 960
  const images = slugContent.nodes[0].photo
  const description =
    slugContent.nodes[0].childContentfulPhotosTopicDescriptionTextNode
  const fewImages = images.length < 4 || windowWidth ? true : false
  const imageStyle = {
    display: fewImages ? "block" : "inline-block",
    padding: 5,
    margin: "0 0 2px",
    width: fewImages ? "90%" : "100%",
    boxSizing: "border-box",
  }

  return (
    <div>
      {description.topicDescription && (
        <Typography>{description.topicDescription}</Typography>
      )}
      <div
        style={{
          columnCount: fewImages ? 1 : 2,
          columnGap: 5,
          margin: 10,
        }}
      >
        {images.map((image, index) => {
          const hasLinkUrl = image.description === ""
          console.log(image.title + index)
          return hasLinkUrl ? (
            <DialogPhoto image={image.fluid}>
              <Img
                fluid={image.fluid}
                style={imageStyle}
                key={image.title + index}
              />
            </DialogPhoto>
          ) : (
            <Link to={image.description}>
              <Img
                fluid={image.fluid}
                style={imageStyle}
                key={image.title + index}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Pages
