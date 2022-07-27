import React, {useEffect, useState} from 'react'
import './Home.css'
// components
import Menu from '../components/Menu'

// // i18next
import { useTranslation } from "react-i18next";


const Home = () => {


  const [bodyDir, setLanguage] = useState("ltr")
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(document.body.dir)
  }, [localStorage.getItem("i18nextLng")])



  return (
    <div className='home-container'>
      <Menu/>
      <body>
    <main>
      <section className="no-parallax">
        <h1>"{t("home_top")}"</h1>
      </section>
      <section className="parallax bg">
        <h1>
          I am, <br />
          <span>SINA OLFATI</span>
        </h1>
      </section>
      <section className="no-parallax">
        <h1>Have a nice day!</h1>
      </section>
    </main>
  </body>
    </div>
  )
}

export default Home
