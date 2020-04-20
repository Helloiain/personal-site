import React from "react"

import { css } from "@emotion/core"
import GitHubButton from "react-github-btn"

export default () => {
  return (
    <div
      css={css`
        margin-top: 150px;
        max-width: 60%;
      `}
    >
      <h1
        css={css`
          font-size: 3rem;
          margin-bottom: 1rem;
        `}
      >
        Hello,
      </h1>
      <p
        css={css`
          font-size: 1.2rem;
        `}
      >
        I am a full-stack developer. Along with tinkering around in web apps, I
        write about modern JavaScript, Node.js and development.
      </p>
      <GitHubButton
        href="https://github.com/Helloiain"
        data-size="large"
        data-show-count="true"
      >
        HelloIain
      </GitHubButton>
    </div>
  )
}
