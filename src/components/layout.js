import React from "react"
import { css } from "@emotion/core"

import Navigation from "./navigation.js"
import Footer from "./footer"

export default ({ children }) => {
  return (
    <>
      <Navigation />
      <div
        css={css`
          margin: 0 auto;
          max-width: 800px;
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}
