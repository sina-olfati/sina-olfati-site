import React, { useEffect, useState } from 'react';
import './App.css';

// SPA
import { Routes, Route } from 'react-router-dom';

// // i18next
import { useTranslation } from "react-i18next";
// import i18next from 'i18next';

// Screens
import Home from './screens/Home';




function App() {

  const [bodyDir, setLanguage] = useState("ltr")
  const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(document.body.dir)
  }, [localStorage.getItem("i18nextLng")])


  // const changeLanguage = (a: string) => {
  //   localStorage.setItem("i18nextLng", a)
  //   i18next.changeLanguage(a)
  //   setLanguage(a)
  // }

  return (
    <div className='container'>
      <div className='all-other'>
      {/* <div className='changing-lang'>
          <button id="eng" onClick={() => changeLanguage("en")}>English</button> / <button onClick={() => changeLanguage("fa")}>فارسی</button>
      </div> */}
        <Routes>
            <Route index element={<Home />} />
        </Routes>
      </div>
     </div>
  )
}

export default App;
