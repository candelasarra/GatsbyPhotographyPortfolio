import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import DialogPhoto from "../components/DialogPhoto"
import useWindowSize from "../hooks/useWindowSize"

const Pages = ({ slugContent }) => {
  const windowSize = useWindowSize()
  const windowWidth = windowSize.windowWidth < 960
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
    cursor: "pointer",
  }
  const styleFewImages = {
    display: "flex",
    justifyContent: "center",
  }
  console.log(windowSize.windowHeight)
  return (
    <div>
      <div
        style={{
          height: "170px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {description.topicDescription && (
          <Typography>{description.topicDescription}</Typography>
        )}
      </div>
      <div
        style={{
          columnCount: fewImages ? 1 : 2,
          columnGap: 5,
          margin: 10,
        }}
      >
        {images.map((image, index) => {
          const hasLinkUrl = image.description === ""

          return hasLinkUrl ? (
            <DialogPhoto image={image.fluid}>
              <div
                style={
                  fewImages
                    ? { display: "flex", justifyContent: "center" }
                    : null
                }
              >
                <Img
                  fluid={image.fluid}
                  style={imageStyle}
                  key={image.title + index}
                />
              </div>
            </DialogPhoto>
          ) : (
            <Link to={image.description}>
              <div
                style={
                  fewImages
                    ? { display: "flex", justifyContent: "center" }
                    : null
                }
              >
                <Img
                  fluid={image.fluid}
                  style={imageStyle}
                  key={image.title + index}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Pages
