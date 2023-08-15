import React, {useEffect, useState} from 'react'
import './Skills.css'

// i18next
import { useTranslation } from "react-i18next";

import Cards from './Cards'

// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)

// 22 elements
const skills = ["React.Js", "Next.Js", "TypeScript",
"PWA", "i18next", "Redux", "Redux-Thunk", "Zustand",
"TanStack Query", "Axios", "Rest API", "SPA", "Material UI",
"Tailwind", "Bootstrap", "Responsive Design", "Docker",
"Git", "JavaScript", "CSS", "HTML", "Scrum"]


const Skills = () => {


  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='skills-container' >
      <div className='skills-sub-container'>
        <h1 lang={language}>{t("resume-skills")}</h1>

        <div className='skills-cards-container-desktop reveal'>
            <Cards skills={skills.slice(0, 6)} id='1' />
            <Cards skills={skills.slice(6, 12)} id='2'/>
            <Cards skills={skills.slice(12, 18)} id='3'/>
            <Cards skills={skills.slice(18, 22)} id='4'/>
        </div>

        <div className='skills-cards-container-mobile reveal'>
            <Cards skills={skills.slice(0, 3)} id='1'/>
            <Cards skills={skills.slice(3, 6)} id='2'/>
            <Cards skills={skills.slice(6, 9)} id='3'/>
            <Cards skills={skills.slice(9, 12)} id='4'/>
            <Cards skills={skills.slice(12, 15)} id='5'/>
            <Cards skills={skills.slice(15, 18)} id='6'/>
            <Cards skills={skills.slice(18, 21)} id='7'/>
            <Cards skills={skills.slice(21, 22)} id='8'/>
        </div>

      </div>
    </div>
  )
}

export default Skills
