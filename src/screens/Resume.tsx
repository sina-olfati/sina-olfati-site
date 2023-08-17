import React, {useEffect} from 'react'
import './Resume.css'

// Components
import Menu from '../components/menu/Menu'
import Describe from '../components/resume/Describe'
import Skills from '../components/resume/skills/Skills'
import Work from '../components/resume/Work'
import Langs from '../components/resume/Langs'


const Resume = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  
  return (
    <div className='resume-container'>
      {/* <Menu page = "resume"/> */}
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
