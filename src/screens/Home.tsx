import React, {useEffect, useState} from 'react'
import './Home.css'

// components
import Menu from '../components/menu/Menu'
import About from '../components/home/About';

// i18next
import { useTranslation } from "react-i18next";


const Home = () => {


  const [bodyDir, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])



  return (
    <div className='home-container' lang={bodyDir}>
      <Menu page= "home"/>
      <div className='home-body'>
    <main>
      <section className="no-parallax">
        <h1 className='top-text'>"{t("home_top")}"</h1>
      </section>
      <section className="parallax bg">
        <h1>
          {t("home_middle_im")} <br />
          <span>{t("home_middle_name")}</span>
        </h1>
      </section>
      <section className="no-parallax">
        <About />
      </section>
    </main>
  </div>
    </div>
  )
}

export default Home
