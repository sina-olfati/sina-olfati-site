import React, {useEffect, useLayoutEffect, useState} from 'react'
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
import { light } from '@mui/material/styles/createPalette';




const Menu = ({page, theme}: any) => {

  // checking scrool amount of page
  const isHeightHigher: any = useHeightCheck()
  

  // theming
  const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  
  const changeTheme = () => {
    theme.toggleColorMode();
    localStorage.setItem("theme", mode == "light" ? "dark" : "light")
    setMode(localStorage.getItem("theme"))
  }
  
  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      theme.toggleColorMode();
      console.log("timeout");
    }
  }, [])


  // lang button
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

  const items = [
    {name: "home", icon: <HomeIcon />},
    {name: "resume", icon: <DescriptionIcon />},
    {name: "portfolio", icon: <DashboardIcon />},
    {name: "contact", icon: <PhoneEnabledIcon />},
  ]


  return (
    <div className='menu' lang={language}>
      <header className='active-menu'>
        <div className={`top-bar ${isHeightHigher ? "scrolled" : ''}`}>
            <div className='options' lang={language}>
                <ul>

                  {items.map((item): any => (
                    <li key={item.name}>
                      <a href={`#${item.name}`} className='link'>
                        <span>{t(`menu.${item.name}`)}</span>
                        {item.icon}
                      </a>
                    </li>
                  ))}

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

                {/* <IconButton onClick={() => setMode(!mode)} className='theming'> */}
                <IconButton onClick={() => changeTheme()} className='theming'>
                  {mode == "light" ? <LightModeIcon /> : <BedtimeIcon />}
                </IconButton>
            </div>


        </div>
      </header>
    </div>
  )
}

export default Menu
