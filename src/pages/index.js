import React from "react"
import { css } from "@emotion/core"

import Hero from "../components/hero"
import PostList from "../components/post-list"
import ProjectList from "../components/project-list"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div>
        <Hero />
      </div>
      <ProjectList />
    </Layout>
  )
}
