// monsterous mastermind

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div
        style={{
          marginTop: "3rem",
          maxWidth: "60%",
        }}
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
            <a
              href="https://romanemperors.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Timeline App
            </a>
          </li>
          <li>
            <a
              href="https://eager-albattani-24fdc1.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Credit Card Form
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
