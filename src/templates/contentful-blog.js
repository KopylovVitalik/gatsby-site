import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate
    }
  }
`

const Blog = props => (
  <Layout>
    <div className="container">
      <h3 className="is-size-3">{props.data.contentfulBlogPost.title}</h3>
      {/* <div className="notification">
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div> */}
    </div>
  </Layout>
)

export default Blog
