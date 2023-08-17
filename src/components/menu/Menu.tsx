import React, {useEffect, useState} from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom';

// costum hook
// import { useScrollScreen } from '../../hooks/UseScrollScreen';
import useHeightCheck from '../../hooks/UseHeightCheck';


// icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';


// i18next
import { useTranslation } from "react-i18next";
import i18next from 'i18next';



const Menu = ({page}: any) => {

  // checking scrool amount of page
  const isHeightHigher: any = useHeightCheck()
  console.log("isHeightHigher: ", isHeightHigher)
  
  // menu and lang activation
  const [active, setActive] = useState(false)
  const [langActive, setLangActive] = useState(false)

  // lang, translate and dir
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
      <div className={`menu-button ${active ? "menu-active" : "menu-inactive"}`}><MenuRoundedIcon sx={{ fontSize: 50 }} onClick={() => setActive(!active)}/></div>
      <header className={active ? 'active-menu' : 'inactive-menu'}>
        <div className={`top-bar ${isHeightHigher ? "scrolled" : ''}`}>
        <div className='options' lang={language}>
          <ul>
            <li><Link to={"/sina-olfati-site"} className={`link ${page === 'home' ? "active" : "inactive"}`}>{t("home")}</Link></li>
            <li><Link to={"/sina-olfati-site/resume"} className={`link ${page === 'resume' ? "active" : "inactive"}`}>{t("resume")}</Link></li>
            <li><Link to={"/sina-olfati-site/portfolio"} className={`link ${page === 'portfolio' ? "active" : "inactive"}`}>{t("portfolio")}</Link></li>
            <li><Link to={"/sina-olfati-site/contact"} className={`link ${page === 'contact' ? "active" : "inactive"}`}>{t("contact")}</Link></li>
          </ul>
        </div>
        <div onClick={() => setLangActive(!langActive)} className={`changing-lang ${langActive ? "langActive" : ""}`} lang={language}>
            <LanguageIcon />
            <div className="langInputs">
              <input id="eng" type="button" value="EN" onClick={() => changeLanguage("en")} className={isEn ? 'lang active' : 'lang'} lang='en'/>
              <input type="button" value="فا"  onClick={() => changeLanguage("fa")} className={isEn ? 'lang' : 'lang active'} lang='fa'/>
            </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Menu
