import React from 'react';
import './App.css';
import Index from './screens/Index';

import { useTranslation } from "react-i18next";




function App() {

  const { t } = useTranslation()

  return (
    <div className='container'>
        <Index/>
        <div>
          <a href="#" onClick={() => localStorage.setItem('i18nextLng', 'en')}>English</a>
          /
          <a href='#' onClick={() => localStorage.setItem('i18nextLng', 'fa')}>فارسی</a>
        </div>
        <h1>{t("welcome_message")}</h1>
     </div>
  )
}

export default App;
