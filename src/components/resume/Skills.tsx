import React, {useEffect, useState} from 'react'
import './Skills.css'

// // i18next
import { useTranslation } from "react-i18next";

import Cards from './Cards'

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
