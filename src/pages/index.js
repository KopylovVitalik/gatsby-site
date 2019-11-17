import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero has-background-light is-fullheight-with-navbar is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Home title</h1>
          <h2 class="subtitle">Home subtitle</h2>
          <Link to="/page-2/">Page 2</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
