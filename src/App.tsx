import React from 'react';
import './App.css';
import Index from './screens/Index';

import { useTranslation } from "react-i18next";


const changeLang = (a: string) => {
  localStorage.setItem("i18nextLng", a)
  window.location.reload();
}


function App() {

  const { t } = useTranslation()

  return (
    <div className='container'>
        <Index/>
        <div>
          <a href="#" id="eng" onClick={() => changeLang("en")}>English</a>
          /
          <a href='#' onClick={() => changeLang("fa")}>فارسی</a>
        </div>
        <h1>{t("welcome_message")}</h1>
     </div>
  )
}

export default App;
