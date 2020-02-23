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
        <h1
          css={css`
            margin-bottom: 3rem;
          `}
        >
          Latest Articles
        </h1>
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
                <p>{node.frontmatter.title} </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
