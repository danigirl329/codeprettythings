import React from "react"
import PropTypes from "prop-types"
import me from "../../images/me.png"

const Intro = ({ children }) => {
    return (
      <>
        <article class="container text-center m-auto max-w-md min-h-screen" id="intro">
            <h1 class="mb-2">Hi There.</h1>
            <img class="rounded-full h-32 w-32 mx-auto" src={me} alt="My face on a lighted background" />
            <h2>I'm Danielle</h2>
            <h3>I'm a frontend <span class="text-green">dev</span>eloper</h3>
            <h4>and a <span class="text-green" id="roulette">coffee enthusiast</span></h4>
        </article>
      </>
    )
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Intro