import PropTypes from "prop-types"
import React from "react"


const SkillsBlock = ({ title, skills }) => {
  let skillsArray = [];
  skillsArray = skills.split(',');
  let skillsList = skillsArray.map((s => <li>{s}</li> ));
  return  (
  <div class="flex-1 border border-green-200 p-2 m-2">
    <h2>{title}</h2>
    <ul>{skillsList}</ul>
  </div>
  )
}

SkillsBlock.propTypes = {
  skills: PropTypes.string,
}

SkillsBlock.defaultProps = {
  siteTitle: ``,
}

export default SkillsBlock
