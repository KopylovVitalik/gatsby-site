import React from "react"
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
// const MenuLink = ({ children, to }) => (
//   <AniLink
//     className="navbar-item"
//     to={to}
//     activeClassName="has-text-danger"
//     cover direction="right" duration={0.9} bg="#C0C0C0"
//   >
//     {children}
//   </AniLink>
// )

// export default MenuLink

const MenuLink = ({ children, to }) => (
  <TransitionLink
  to={to}
  className="navbar-item"
  activeClassName="has-text-danger"
  exit={{
    trigger: ({ exit, node }) => console.log(exit, node),
    length: 1
  }}
  entry={{
    delay: 0.6
  }}
>
  {children}
</TransitionLink>
)

export default MenuLink