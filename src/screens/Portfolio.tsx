import React, {useEffect, useState} from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

// images
import mySite from'../assets/images/mySite.png'
import myShop from '../assets/images/myShop.png'

// Components
import Menu from '../components/menu/Menu'
import { t } from 'i18next'

// i18next
import { useTranslation } from "react-i18next";


const Portfolio = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='port-container'>
        <Menu page = "portfolio"/>
        <div className='port-cards' lang={language}>

          {/* First card */}
          <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-one-name")}</p>
              <img src={ mySite } alt='Sinas Site'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-one-name")}</h1>
              <h2>{t("portfolio-one-description")}</h2>
              <h3>{t("portfolio-one-technologies")}</h3>         
            </div>
          </div>

          {/* Second card */}
          <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-two-name")}</p>
              <img src={ myShop } alt='Sinas Shop'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-two-name")}</h1>
              <h2>{t("portfolio-two-description")}</h2>
              <h3>{t("portfolio-two-technologies")}</h3>
              <Link className="visitButton" to='/sina-olfati-site/products'>{t("portfolio-two-visit")}</Link>
            </div>
          </div>

          {/* Third card */}
          <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-Three-name")}</p>
              <img src={ myShop } alt='Sinas Shop'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-Three-name")}</h1>
              <h2>{t("portfolio-Three-description")}</h2>
              <h3>{t("portfolio-Three-technologies")}</h3>
              <a className="visitButton" href='https://resume-template-sina.vercel.app'>{t("portfolio-two-visit")}</a>
            </div>
          </div>


        </div>
    </div>
  )
}

export default Portfolio
