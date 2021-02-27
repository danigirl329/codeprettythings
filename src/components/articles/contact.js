import React from "react"
import PropTypes from "prop-types"
import contactMe from "../../images/contact-image.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = ({ children }) => {
    return (
        <>
        <article class="container m-auto max-w-md min-h-screen" id="contact">
        <h1 class="text-center">Where You Can Find Me</h1>
        <img class="max-w-md" src={contactMe} alt="woman in computer" />
        <div class="text-center text-gray-600 text-5xl">
          <span class="mx-2"><a href="https://www.linkedin.com/in/danigreaves"><FontAwesomeIcon icon={faLinkedinIn} /></a></span> 
          <span class="mx-2"><a href="https://instagram.com/_danigirl329_/"><FontAwesomeIcon icon={faInstagram} /></a></span>
          <span class="mx-2"><a href="https://github.com/danigirl329"><FontAwesomeIcon icon={faGithub} /></a></span>
        </div>
      </article>
        </>
    )
}

Contact.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Contact