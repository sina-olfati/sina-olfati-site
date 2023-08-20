import React, {useEffect, useState} from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom';

// costum hook
// import { useScrollScreen } from '../../hooks/UseScrollScreen';
import useHeightCheck from '../../hooks/UseHeightCheck';


// icons
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';


// i18next
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { IconButton } from '@mui/material';




const Menu = ({page, theme}: any) => {

  // checking scrool amount of page
  const isHeightHigher: any = useHeightCheck()
  // console.log("isHeightHigher: ", isHeightHigher)
  
  // lang button and lightMode activation
  const [langActive, setLangActive] = useState(false)
  const [lightMode, setLightMode] = useState(true)

  // theme
  const changeTheme = () => {
    theme.toggleColorMode();
    setLightMode(!lightMode);
  }

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
    <div className='menu' lang={language}>
      <header className='active-menu'>
        <div className={`top-bar ${isHeightHigher ? "scrolled" : ''}`}>
            <div className='options' lang={language}>
                <ul>
                    <li><a href="#home" className={`link ${page === 'home' ? "active" : "inactive"}`}><span>{t("home")}</span><HomeIcon /></a></li>
                    <li><a href="#resume" className={`link ${page === 'resume' ? "active" : "inactive"}`}><span>{t("resume")}</span><DescriptionIcon /></a></li>
                    <li><a href="#portfolio" className={`link ${page === 'portfolio' ? "active" : "inactive"}`}><span>{t("portfolio")}</span><DashboardIcon /></a></li>
                    <li><a href="#contact" className={`link ${page === 'contact' ? "active" : "inactive"}`}><span>{t("contact")}</span><PhoneEnabledIcon /></a></li>
                    {/* <li><Link to={"/sina-olfati-site"} className={`link ${page === 'home' ? "active" : "inactive"}`}><span>{t("home")}</span><HomeIcon /></Link></li>
                    <li><Link to={"/sina-olfati-site/resume"} className={`link ${page === 'resume' ? "active" : "inactive"}`}><span>{t("resume")}</span><DescriptionIcon /></Link></li>
                    <li><Link to={"/sina-olfati-site/portfolio"} className={`link ${page === 'portfolio' ? "active" : "inactive"}`}><span>{t("portfolio")}</span><DashboardIcon /></Link></li>
                    <li><Link to={"/sina-olfati-site/contact"} className={`link ${page === 'contact' ? "active" : "inactive"}`}><span>{t("contact")}</span><PhoneEnabledIcon /></Link></li> */}
                </ul>
            </div>

            <div className='buttons'>
                <div onClick={() => setLangActive(!langActive)} className={`changing-lang ${langActive ? "langActive" : ""}`} lang={language}>
                    <LanguageIcon />
                    <div className="langInputs">
                      <input id="eng" type="button" value="EN" onClick={() => changeLanguage("en")} className={isEn ? 'lang active' : 'lang'} lang='en'/>
                      <input type="button" value="فا"  onClick={() => changeLanguage("fa")} className={isEn ? 'lang' : 'lang active'} lang='fa'/>
                    </div>
                </div>

                {/* <IconButton onClick={() => setLightMode(!lightMode)} className='theming'> */}
                <IconButton onClick={() => changeTheme()} className='theming'>
                  {lightMode ? <LightModeIcon sx={{color: "black"}} /> : <BedtimeIcon sx={{color: "white"}} />}
                </IconButton>
            </div>


        </div>
      </header>
    </div>
  )
}

export default Menu