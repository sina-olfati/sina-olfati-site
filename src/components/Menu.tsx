import React, {useEffect, useState} from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom';

// i18next
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const Menu = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "en")
  const isEn = language =="en"

  const { t } = useTranslation()

  useEffect(() => {
    document.body.dir = isEn ? "ltr" : "rtl"
    document.title = t("app_title")
  }, [language, t])


  const changeLanguage = (a: string) => {
    localStorage.setItem("i18nextLng", a)
    i18next.changeLanguage(a)
    setLanguage(a)
  }



  return (
    <header>
      <div className='top-bar'>
      <div className='options'>
        <ul>
          <li><Link to={"/"} className='link'>{t("portfolio")}</Link></li>
          <li><Link to={"/Resume"} className='link'>{t("about_site")}</Link></li>
          <li><Link to={"/Aboutsite"} className='link'>{t("resume")}</Link></li>
          <li><Link to={"/"} className='link'>{t("home")}</Link></li>
        </ul>
      </div>
      <div className='changing-lang'>
          <input id="eng" type="button" value="English" onClick={() => changeLanguage("en")} className={isEn ? 'lang active' : 'lang'}/> /<input type="button" value="فارسی"  onClick={() => changeLanguage("fa")} className={isEn ? 'lang' : 'lang active'}/>
      </div>
      </div>
      
    </header>
  )
}

export default Menu
