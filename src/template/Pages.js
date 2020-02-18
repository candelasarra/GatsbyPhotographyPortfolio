import React from "react"
import SideBar from "../components/SideBar"

const Pages = images => {
  const fewImages = images.images.length < 4 ? true : false
  return (
    <div
      style={{
        columnCount: fewImages ? 1 : 2,
        columnGap: 5,
        flex: 4,
      }}
    >
      {images.images.map(image => {
        return (
          <img
            src={image.url}
            style={{
              display: fewImages ? "block" : "inline-block",
              margin: fewImages ? "auto" : "unset",
              padding: 5,
              //   margin: "0 0 2px",
              width: fewImages ? "70%" : "100%",
              boxSizing: "border-box",
            }}
          />
        )
      })}
    </div>
  )
}

export default Pages
