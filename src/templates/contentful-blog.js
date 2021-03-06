import React from "react"
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
  <>
  <section className="hero is-success is-fullheight-with-navbar is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{props.data.contentfulBlogPost.title}</h1>
        </div>
      </div>
    </section>
  </>
)

export default Blog
