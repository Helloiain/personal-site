import React from "react"

import Navigation from "./navigation.js"

export default ({ children }) => {
  return (
    <>
      <Navigation />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        {children}
      </div>
    </>
  )
}
