import React from "react"
import PropTypes from "prop-types"
import skillsImg from "../../images/skills_image.svg"

const Skills = ({ children }) => {
    return (
        <>
        <article class="container my-6 m-auto max-w-3xl min-h-screen" id="skills">
        <h1 class="text-center">What I Can Do</h1>
        <img class="max-w-xs m-auto" src={skillsImg} alt="illustration of woman at computer" />
        <div class="min-w-2xl mr-2 -ml-2 flex flex-wrap">
          <div class="flex-1 border border-green-200 p-2 m-2">
            <h2 class="">Basics</h2>
            <ul class="">
              <li>HTML5</li>
              <li>CSS/Sass</li>
              <li>Webpacker</li>
              <li>Npm/Yarn</li>
              <li>Sketch</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <div class="flex-1 border border-green-200 p-2 m-2">
            <h2 class="">Extras</h2>
            <ul class="">
              <li>Google Tag Manager</li>
              <li>Google Analytics</li>
              <li>Performance</li>
              <li>Accessibility</li>
              <li>UX/UI Testing</li>
              <li>HTML Email Templating</li>
              <li>AWS EC2, CodePipeline, CodeDeploy, Cloudfront</li>
            </ul>
          </div>
          <div class="flex-1 border border-green-200 p-2 m-2">
            <h2 class="">Frameworks</h2>
            <ul class="">
              <li>Ruby on Rails</li>
              <li>StimulusJS</li>
              <li>ASP.Net</li>
              <li>Gatsby</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </article>
        </>
    )
}

Skills.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Skills
