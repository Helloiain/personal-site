import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { FaGithub } from "react-icons/fa"
import { MdLaunch } from "react-icons/md"

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                order
                name
                github
                technologies
                url
                discription
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin-top: 8rem;
        `}
      >
        <h1
          css={css`
            margin-bottom: 3rem;
          `}
        >
          Projects
        </h1>
        <ul
          css={css`
            margin: 0;
          `}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => {
            if (node.frontmatter.order !== null) {
              return (
                <li
                  key={node.frontmatter.order}
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                  `}
                >
                  <div
                    css={css`
                      margin-bottom: 3rem;
                    `}
                  >
                    <h4>{node.frontmatter.name}</h4>
                    <p>{node.frontmatter.discription}</p>
                    {node.frontmatter.technologies.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          css={css`
                            padding: 0.2rem;
                            margin-right: 1rem;
                            color: #fff;
                            background: #282a30;
                            border-radius: 1px;
                          `}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={node.frontmatter.url}
                      css={css`
                        display: block;
                      `}
                    >
                      <span>
                        <MdLaunch size={30} />
                      </span>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={node.frontmatter.github}
                      css={css`
                        display: block;
                      `}
                    >
                      <span>
                        <FaGithub size={30} />
                      </span>
                    </a>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )}
  />
)
