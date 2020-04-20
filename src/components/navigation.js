import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"

import Resume from "../content/Resume.pdf"

export default () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", headOnScroll)
    return window.removeEventListener("scroll", headOnScroll)
  }, [])

  const headOnScroll = () => {
    if (window.scrollY > 20) setScrolled(true)
    else setScrolled(false)
  }
  return (
    <>
      <header
        css={css`
          position: fixed;
          background-color: #282a30;
          color: #fff;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
        `}
      >
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
            <li
              css={css`
                float: left;
                margin-right: 1rem;
              `}
            >
              <Link
                to="/writing/"
                css={css`
                  text-decoration: none;
                  color: #fff;
                `}
              >
                Writing
              </Link>
            </li>
            <li
              css={css`
                float: left;
              `}
            >
              <a
                href={Resume}
                rel="nooppener noreferrer"
                target="_blank"
                css={css`
                  text-decoration: none;
                  color: #fff;
                `}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
