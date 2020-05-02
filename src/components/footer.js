import React from "react"
import { css } from "@emotion/core"

export default () => {
  return (
    <footer
      css={css`
        max-width: 800px;
        margin: auto;
      `}
    >
      <p>&#169; Ian Parkinson | Built with ❤️</p>
      <div
        dangerouslySetInnerHTML={{ __html: "<!-- Discord: Fiddler#3647 -->" }}
      />
    </footer>
  )
}
