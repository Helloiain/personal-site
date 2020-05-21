import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div
        css={css`
          margin-top: 3rem;
          max-width: 60%;
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
            margin-bottom: 1rem;
          `}
        >
          Hello
        </h1>
        <p
          css={css`
            font-size: 1.2rem;
          `}
        >
          {" "}
          I am a software engineer. Along with tinkering around in web apps I{" "}
          <Link to="/writing/">write</Link> about modern JavaScript,
          development, and whatever else I may have going on in my life.
        </p>
      </div>
    </Layout>
  )
}
