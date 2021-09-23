import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import me from "../../images/me.png"

const Intro = ({ children }) => {
  var hobbies = ["coffee enthusiast", "dog cuddler", "biker", "vespa lover", "camper", "hiker", "runner"]
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(second => (second === 6 ? 0 : second + 1));
    }, 2000);
    return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      console.log("seconds", seconds);
    }, [seconds]);  
    return (
      <>
        <article class="container text-center m-auto max-w-md min-h-screen" id="intro">
            <h1 class="mb-2">Hi There.</h1>
            <img class="rounded-full h-32 w-32 mx-auto" src={me} alt="My face on a lighted background" />
            <h2>I'm Danielle</h2>
            <h3>I'm a frontend <span class="text-green">dev</span>eloper</h3>
            <h4>and a </h4>
            <h4><span class="text-green" id="roulette">{hobbies[seconds]}</span></h4>
        </article>
      </>
    )
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Intro