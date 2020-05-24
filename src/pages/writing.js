import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Writing = ({ data }) => (
  <Layout>
    <ul
      style={{
        margin: "3rem 0",
      }}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li
          key={node.id}
          style={{
            listStyle: "none",
            marginBottom: "2rem",
          }}
        >
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
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
`

export default Writing
