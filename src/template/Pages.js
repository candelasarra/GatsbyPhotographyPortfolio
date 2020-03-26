import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { Typography, Fade } from "@material-ui/core"
import DialogPhoto from "../components/DialogPhoto"
import useWindowSize from "../hooks/useWindowSize"

const Pages = ({ slugContent, windowSize }) => {
  const [isMobileView, setIsMobileView] = useState(windowSize.windowWidth < 960)
  const [loadImages, setLoadImages] = useState(false)
  const images = slugContent.nodes[0].photo
  const description =
    slugContent.nodes[0].childContentfulPhotosTopicDescriptionTextNode
  const fewImages = images.length < 4 || isMobileView ? true : false
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
  useEffect(() => {
    setIsMobileView(windowSize.windowWidth < 960)
  }, [windowSize.windowWidth])
  useEffect(() => {
    setLoadImages(state => !state)
    return () => setLoadImages(state => !state)
  }, [])
  console.log(loadImages)

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

          // return hasLinkUrl ? (
          return (
            <DialogPhoto image={image.fluid}>
              <div
                style={
                  fewImages
                    ? { display: "flex", justifyContent: "center" }
                    : null
                }
              >
                <Fade
                  in={loadImages}
                  //style={{ transformOrigin: "0 0 0" }}
                  {...(loadImages ? { timeout: 2000 } : {})}
                  //   direction="up"
                >
                  <Img
                    fluid={image.fluid}
                    style={imageStyle}
                    key={image.title + index}
                    backgroundColor="#ecebeb"
                  />
                </Fade>
              </div>
            </DialogPhoto>
          )
          // ) : (
          //   <Link to={image.description}>
          //     <div
          //       style={
          //         fewImages
          //           ? { display: "flex", justifyContent: "center" }
          //           : null
          //       }
          //     >
          //       <Img
          //         fluid={image.fluid}
          //         style={imageStyle}
          //         key={image.title + index}
          //       />
          //     </div>
          //   </Link>
          // )
        })}
      </div>
    </div>
  )
}

export default Pages
