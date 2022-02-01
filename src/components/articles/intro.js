import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import me from "../../images/me.png"

const Intro = ({ children }) => {
  var hobbies = ["coffee enthusiast ☕", 
  "dog cuddler 🐾", "biker 🚲", "vespa lover 🛵", 
  "camper 🏕️", "hiker 🥾", "runner 🏃‍♀️"]
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(second => (second === 6 ? 0 : second + 1));
    }, 2000);
    return () => clearInterval(interval);
    }, []);
    useEffect(() => [seconds]);  
    return (
      <>
        <article class="container m-auto min-h-screen" id="intro">
            <img class="rounded-full mx-auto h-48 w-48" src={me} alt="My face on a lighted background" />
            <h1 class="text-center">Hi 👋 I'm Danielle</h1>
            <h3 className="text-center">I'm a frontend <span class="text-green">dev</span>eloper and a 
            <span class="text-green" id="roulette"> {hobbies[seconds]}</span></h3>
        </article>
      </>
    )
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Intro