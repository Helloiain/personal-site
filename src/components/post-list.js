import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <ul
          css={css`
            margin: 0;
          `}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li
              key={node.id}
              css={css`
                list-style: none;
                margin-bottom: 2rem;
              `}
            >
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    font-weight: 400;
                    margin-bottom: 0;
                  `}
                >
                  {node.frontmatter.title}{" "}
                </h3>
                <p
                  css={css`
                    color: rgba(0, 0, 0, 0.6);
                  `}
                >
                  {node.frontmatter.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
