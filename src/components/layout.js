import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import Resume from "../content/Resume.pdf"
import { FaTintSlash } from "react-icons/fa"

export default ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScrolled({ scrolled: true })
        console.log(scrolled)
      } else {
        setScrolled({ scrolled: false })
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 20) {
          setScrolled({ scrolled: true })
          console.log(scrolled)
        } else {
          setScrolled({ scrolled: false })
        }
      })
    }
  }, [])

  return (
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
              `}
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
      {children}
    </div>
  )
}
