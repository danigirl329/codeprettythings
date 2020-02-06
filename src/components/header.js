import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.svg"


const Header = ({ siteTitle }) => (
  <header class="container min-w-full bg-pink py-1 px-1" >
      <h1 class="flex-1 mr-6">
        <Link
          to="/"          
          alt={siteTitle}
        >
        <img class="h-12" src={logo} alt="Go back to the homepage" />  
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
