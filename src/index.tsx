import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import './Webfonts/fontiran.css'
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// SPA
import {BrowserRouter} from "react-router-dom"

// utils
import Loading from './utils/loading/Loading';

// i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    detection: {
      order: ['path', 'localStorage', 'htmlTag', 'cookie', 'subdomain'],
      caches: ['cookie', 'localStorage']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  const loadingMarkup = (<Loading />)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Suspense fallback={loadingMarkup}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Suspense>
  </BrowserRouter>
);

serviceWorkerRegistration.register();

