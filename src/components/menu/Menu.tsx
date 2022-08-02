import React, {useEffect, useState} from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom';

// icon
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// i18next
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const Menu = () => {

  const [active, setActive] = useState(false)

  const [language, setLanguage] = useState<string | null>(localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "en")
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
    <div className='menu'>
      <div className='menu-button' onClick={() => setActive(!active)}><MenuRoundedIcon sx={{ fontSize: 50 }}/></div>
      <header className={active ? 'active-menu' : 'inactive-menu'}>
        <div className='top-bar'>
        <div className='options' lang={language}>
          <ul>
            <li><Link to={"/"} className='link'>{t("home")}</Link></li>
            <li><Link to={"/resume"} className='link'>{t("resume")}</Link></li>
            <li><Link to={"/portfolio"} className='link'>{t("portfolio")}</Link></li>
            <li><Link to={"/contact"} className='link'>{t("contact")}</Link></li>
          </ul>
        </div>
        <div className='changing-lang'>
            <input id="eng" type="button" value="English" onClick={() => changeLanguage("en")} className={isEn ? 'lang active' : 'lang'} lang='en'/> /<input type="button" value="فارسی"  onClick={() => changeLanguage("fa")} className={isEn ? 'lang' : 'lang active'} lang='fa'/>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Menu
