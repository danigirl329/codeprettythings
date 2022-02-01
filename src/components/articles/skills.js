import React from "react"
import PropTypes from "prop-types"
import SkillsBlock from "../skills_block"
import skillsImg from "../../images/skills_image.svg"

const Skills = ({ children }) => {
    return (
        <>
        <article class="container my-6 m-auto max-w-3xl min-h-screen" id="skills">
        <h1 class="text-center">What I Can Do</h1>
        <img class="max-w-xs m-auto" src={skillsImg} alt="illustration of woman at computer" />
        <div class="">
          <SkillsBlock title="Basics" skills="HTML5,CSS/Sass,Webpacker,Npm/Yarn,Sketch,Photoshop"></SkillsBlock>
          <SkillsBlock title="Frameworks" skills="Ruby on Rails,StimulusJS,ASP.Net,Gatsby,TailwindCSS"></SkillsBlock>
          <SkillsBlock title="Extras" skills="Google Tag Manager,Google Analytics,Performance,Accessibility,UX/UI Testing,AWS Certified Developer"></SkillsBlock>
        </div>
      </article>
        </>
    )
}

Skills.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Skills
