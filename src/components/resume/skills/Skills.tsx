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
            <Cards skills={["React.js", "Next.js", "TypeScript", "PWA", "SPA"]} />
            <Cards skills={["Redux", "Redux-Thunk", "Recoil", "Rest API", "Axios"]} />
            <Cards skills={["Material UI", "Tailwind", "Formik", "Responsive\nDesign", "Docker"]} />
            <Cards skills={["Git", "Scrum", "JS", "CSS", "HTML"]} />
        </div>
      </div>
    </div>
  )
}

export default Skills
