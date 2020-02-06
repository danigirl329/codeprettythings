import React from "react"
import PropTypes from "prop-types"
import pctHomepage from "../../images/workImages/pct-homepage.png"
import trafHomepage from "../../images/workImages/traf-homepage.png"
import parkPGHHomepage from "../../images/workImages/parkpgh.png"
import pptHomepage from "../../images/workImages/ppt.png"


const Work = ({ children }) => {
    return (
        <>
        <article class="container my-6 mx-auto min-h-screen" id="work">
        <h1 class="text-center">What I've Done</h1>
        <div class="flex flex-wrap">
          <div class="md:flex-1 mr-5">
            <a href="https://trustarts.org">
              <img src={pctHomepage} alt="trustarts.org homepage" />
            </a>
          </div>
          <div class="md:flex-1">
            <a href="https://traf.trustarts.org">
              <img src={trafHomepage} alt="traf.trustarts.org homepage" />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="md:flex-1 mr-5">
            <a href="https://parkpgh.org">
              <img src={parkPGHHomepage} alt="parkpgh.org homepage" />
            </a>
          </div>
          <div class="md:flex-1">
            <a href="https://ppt.org">
              <img src={pptHomepage} alt="ppt.org homepage" />
            </a>
          </div>
        </div>
      </article>
        </>
    )
}

Work.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Work