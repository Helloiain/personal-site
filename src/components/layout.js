import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link
      to={props.to}
      css={css`
        color: inherit;
        text-decoration: none;
      `}
    >
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div
    css={css`
      margin: 3rem auto;
      max-width: 800px;
    `}
  >
    <header
      css={css`
        margin-bottom: 1rem;
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
            display: inline;
          `}
        >
          Ian Parkinson
        </h3>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <ListLink to="/portfolio/">Portfolio</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
