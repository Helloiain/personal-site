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
        <h1>Hello, I'm Ian.</h1>
        <p>
          {" "}
          I am a software engineer. Along with tinkering around in web apps I{" "}
          <Link to="/writing/">write</Link> about modern JavaScript,
          development, and whatever else I may have going on in my life.
        </p>
        <h4>Things I've done.</h4>
        <ul
          style={{
            margin: 0,
            listStyle: "none",
          }}
        >
          <li>
            <a href="https://romanemperors.netlify.app/">Timeline App</a>
          </li>
          <li>
            <a href="https://eager-albattani-24fdc1.netlify.app/">
              Credit Card Form
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
