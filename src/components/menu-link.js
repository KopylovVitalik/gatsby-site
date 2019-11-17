import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MenuLink = ({ children, to }) => (
  <AniLink
    className="navbar-item"
    to={to}
    activeClassName="has-text-danger"
    cover direction="right" duration={0.9} bg="#C0C0C0"
  >
    {children}
  </AniLink>
)

export default MenuLink
