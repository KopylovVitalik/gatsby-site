import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <section class="hero is-fullheight-with-navbar is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">About title</h1>
          <h2 class="subtitle">About subtitle</h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
