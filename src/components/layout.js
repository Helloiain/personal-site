import React from "react"
import { Helmet } from "react-helmet"

import Navigation from "./navigation.js"

export default ({ children }) => {
  return (
    <>
      <Helmet>
        {" "}
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>
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
