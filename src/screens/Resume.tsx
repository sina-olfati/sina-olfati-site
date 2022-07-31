import React from 'react'
import './Resume.css'
// Components
import Menu from '../components/menu/Menu'
import Describe from '../components/resume/Describe'
import Skills from '../components/resume/skills/Skills'
import Work from '../components/resume/Work'
import Langs from '../components/resume/Langs'


const Resume = () => {
  return (
    <div className='resume-container'>
      <Menu />
        <div className='resume-all-others'>
        <Describe />
        <Skills />
        <Work />
        <Langs />
        </div>
    </div>
  )
}

export default Resume