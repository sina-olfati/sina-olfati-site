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
            <Cards one="ReactJs" two="TypeScript" three="Redux" four="PWA" five="Material Ui"/>
            <Cards one="Formik" two="Git" three="JS6" four="CSS" five="HTML"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
