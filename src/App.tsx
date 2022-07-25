import React, { useEffect, useState } from 'react';
import './App.css';
import Index from './screens/Index';
// i18next
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from 'i18next';


function App() {

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
    <div className='container'>
        <Index/>
        <div>
          <button id="eng" onClick={() => changeLanguage("en")}>English</button> / <button onClick={() => changeLanguage("fa")}>فارسی</button>
        </div>
        <h1 className={isEn ? "h1en" : "h1fa"}>{t("welcome_message")}</h1>
     </div>
  )
}

export default App;
