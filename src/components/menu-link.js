import React from "react"
import { Link } from "gatsby"
import { AniLink } from "gatsby-plugin-transition-link/AniLink"

const MenuLink = ({ children, to }) => (
  <AniLink
    className="navbar-item"
    to={to}
    activeClassName="has-text-warning"
    swipe
    direction="up"
  >
    {children}
  </AniLink>
)

export default MenuLink
