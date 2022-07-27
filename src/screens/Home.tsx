import React, {useEffect, useState} from 'react'
import './Home.css'

// components
import Menu from '../components/Menu'

// // i18next
import { useTranslation } from "react-i18next";


const Home = () => {


  const [bodyDir, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])



  return (
    <div className='home-container'>
      <Menu/>
      <div className='home-body'>
    <main>
      <section className="no-parallax">
        <h1 lang={bodyDir}>"{t("home_top")}"</h1>
      </section>
      <section className="parallax bg">
        <h1 lang={bodyDir}>
          {t("home_middle_im")} <br />
          <span>{t("home_middle_name")}</span>
        </h1>
      </section>
      <section className="no-parallax">
        <h1 lang={bodyDir}>Have a nice day!</h1>
      </section>
    </main>
  </div>
    </div>
  )
}

export default Home
