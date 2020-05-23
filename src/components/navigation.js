import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import logo from "../../static/noun_Sword_in_Stone.svg"

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
            border: none;
          `}
        >
          <img
            css={css`
              margin: 0;
              width: 40px;
            `}
            src={logo}
          />
        </Link>
      </div>
    </header>
  )
}
