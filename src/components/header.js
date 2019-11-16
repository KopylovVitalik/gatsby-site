import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuLink from "./menu-link"

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div className="navbar-brand">
          <h1>
            <Link
              className="is-size-2 has-text-danger has-text-weight-bold"
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="navbar-end">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about/">About</MenuLink>
          <MenuLink to="/contact-us/">Contacts</MenuLink>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
