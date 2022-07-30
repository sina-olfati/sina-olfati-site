import React from 'react'
import './Resume.css'
// Components
import Menu from '../components/menu/Menu'
import Describe from '../components/resume/Describe'
import Skills from '../components/resume/Skills'
import Work from '../components/resume/Work'


const Resume = () => {
  return (
    <div className='resume-container'>
      <Menu />
        <div className='resume-all-others'>
        <Describe />
        <Skills />
        <Work />
        </div>
    </div>
  )
}

export default Resume
