import React from 'react'
import './Skills.css'

import Cards from './Cards'

const Skills = () => {
  return (
    <div className='skills-container'>
      <div>
        <h1>Skills</h1>
        <div className='skills-cards-container'>
            <Cards one="React" two="PWA" three="Redux" four="JS" five="CSS"/>
            <Cards one="html" two="html" three="html" four="html" five="html"/>
            <Cards one="html" two="html" three="html" four="html" five="html"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
