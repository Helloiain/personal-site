import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default () => {
  return (
    <header css={css``}>
      <div
        css={css`
          max-width: 800px;
          margin: auto;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link
          to="/"
          css={css`
            color: inherit;
            text-decoration: none;
            text-shadow: none;
            background-image: none;
          `}
        >
          <h3
            css={css`
              margin: 0;
            `}
          >
            Ian Parkinson
          </h3>
        </Link>
      </div>
    </header>
  )
}
