import React from "react"

const Pages = slugContent => {
  const fewImages = slugContent.slugContent.photo.length < 4 ? true : false
  console.log(slugContent.slugContent)
  return (
    <div
      style={{
        columnCount: fewImages ? 1 : 2,
        columnGap: 5,
        margin: 10,
      }}
    >
      {slugContent.slugContent.photo.map(image => {
        return (
          <img
            src={image.file.url}
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
