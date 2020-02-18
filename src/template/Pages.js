import React from "react"

const Pages = images => {
  const fewImages = images.images.length < 4 ? true : false
  return (
    <div
      style={{
        columnCount: fewImages ? 1 : 2,
        columnGap: 5,
        margin: 10,
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
              width: fewImages ? "90%" : "100%",
              boxSizing: "border-box",
            }}
          />
        )
      })}
    </div>
  )
}

export default Pages
