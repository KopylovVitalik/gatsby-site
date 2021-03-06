import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const ContentfulBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MM YYYY")
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              {data.allContentfulBlogPost.edges.map((blog, i) => {
                return (
                  <div className="column" key={i}>
                    <div className="card is-rounded">
                      <header className="card-header">
                        <h3 className="is-size-4 card-header-title">
                          {blog.node.title}
                        </h3>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          <p>{blog.node.publishedDate}</p>
                          <Link
                            className="button is-info is-outlined"
                            to={`/blog/${blog.node.slug}`}
                          >
                            Read blog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentfulBlog
