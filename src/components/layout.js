import React, { useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Three from "./react-three/three"

import { TransitionPortal } from "gatsby-plugin-transition-link"
import Header from "./header"
import Footer from "./footer"

import { TransitionState } from "gatsby-plugin-transition-link"
import "./layout.css"
import "./bulma.scss"
import "./card.sass"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const canvasRef = useRef(null)

  return (
    <div className="page-wrapper">
      {/* <Three /> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
