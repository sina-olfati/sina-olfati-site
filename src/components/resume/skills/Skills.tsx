import React, {useEffect, useState} from 'react'
import './Skills.css'

// i18next
import { useTranslation } from "react-i18next";

import Cards from './Cards'

// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)



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
        <div className='skills-cards-container reveal'>
            <Cards skills={["React.Js", "Next.Js", "Node.Js", "MongoDB", "TypeScript", "PWA"]} />
            <Cards skills={["i18next", "Redux", "Redux-Thunk", "Recoil", "Rest API", "SPA",]} />
            <Cards skills={["Axios", "Material UI", "Tailwind", "Bootstrap", "Responsive Design", "Docker"]} />
            <Cards skills={["Git", "Scrum", "JavaScript", "CSS", "HTML"]} />
        </div>
      </div>
    </div>
  )
}

export default Skills
