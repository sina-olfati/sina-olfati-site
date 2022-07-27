import React, {useEffect, useState} from 'react'
import './About.css'

// // i18next
import { useTranslation } from "react-i18next";


const About = () => {


    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='about-home-container'>
        <ul className='about-home-ul' lang={language}>
            <li>{t("home_bottom_age")}</li>
            <li>{t("home_bottom_single")}</li>
            <li>{t("home_bottom_teacher")}</li>
            <li>{t("home_bottom_learning")}</li>
            <li>{t("home_bottom_ui")}</li>
            <li>{t("home_bottom_friends")}</li>
            <li>{t("home_bottom_alone")}</li>
            <li>{t("home_bottom_live")}</li>
            <li>{t("home_bottom_politics")}</li>
            <li>{t("home_bottom_wanting")}
                <ol>
                    <li>{t("home_bottom_learning2")}</li>
                    <li>{t("home_bottom_new")}</li>
                    <li>{t("home_bottom_compatible")}</li>
                    <li>{t("home_bottom_exercise")}</li>
                </ol>
            </li>
            <li>{t("home_bottom_humble")}</li>
        </ul>
    </div>
  )
}

export default About
