import React from "react"
import Img from "gatsby-image"

const Pages = slugContent => {
  const windowWidth = window.innerWidth < 960
  const fewImages =
    slugContent.slugContent.photo.length < 4 || windowWidth ? true : false
  console.log(slugContent.slugContent)
  return (
    <div
      style={{
        columnCount: fewImages ? 1 : 2,
        columnGap: 5,
        margin: 10,
      }}
    >
      {slugContent.slugContent.photo.map((image, index) => {
        return (
          <Img
            fluid={image.fluid}
            style={{
              display: fewImages ? "block" : "inline-block",
              margin: fewImages ? "auto" : "unset",
              padding: 5,
              margin: "0 0 2px",
              width: fewImages ? "90%" : "100%",
              boxSizing: "border-box",
            }}
            key={image.title + index}
          />
        )
      })}
    </div>
  )
}

export default Pages
