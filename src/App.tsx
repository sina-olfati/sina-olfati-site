import React, { useEffect, useState } from 'react';
import './App.css';

// SPA
import { Routes, Route } from 'react-router-dom';

// i18next
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from 'i18next';

// Screens
import Home from './screens/Home';

// components
import Menu from './components/Menu';


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
      <Menu />
      <div className='all-other'>
      <div className='changing-lang'>
          <button id="eng" onClick={() => changeLanguage("en")}>English</button> / <button onClick={() => changeLanguage("fa")}>فارسی</button>
      </div>
        <h1 className={isEn ? "h1en" : "h1fa"}>{t("welcome_message")}</h1>
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
            <Route index element={<Home />} />
              {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route> */}
        </Routes>
      </div>
     </div>
  )
}

export default App;
