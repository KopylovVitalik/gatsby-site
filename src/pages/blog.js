import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <section class="hero is-fullheight-with-navbar is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              {data.allMarkdownRemark.edges.map((blog, i) => {
                return (
                  <div className="column" key={i}>
                    <div className="card is-rounded">
                      <header class="card-header">
                        <h3 className="is-size-4 card-header-title">
                          {blog.node.frontmatter.title}
                        </h3>
                      </header>
                      <div class="card-content">
                        <div className="content">
                          <p>{blog.node.frontmatter.date}</p>
                          <Link class="button is-info is-outlined" to={`/blog/${blog.node.fields.slug}`}>Read blog</Link>
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
    </Layout>
  )
}

export default IndexPage
