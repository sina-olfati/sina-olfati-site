import React, {useEffect, useState} from 'react'
import './Home.css'

// components
import Menu from '../components/menu/Menu'
import About from '../components/home/About';

// MUi
import { IconButton } from '@mui/material';

// icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

            <div className='top-text'>
              <h1>{t("home_top1")}</h1>
              <h1>{t("home_top2")}</h1>
            </div>

            <div className='scroll'>
              <h2>{t("home_scroll")}</h2>
              <div className='arrows'>
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
              </div>
            </div>

            <div className='fastLinks'>
              <ul>
                <li><a href="mailto:sinaolfati6@gmail.com"><IconButton><EmailIcon/></IconButton></a></li>
                <li><a href="https://www.linkedin.com/in/sina-olfati-872950233"><IconButton><LinkedInIcon/></IconButton></a></li>
                <li><a href="https://github.com/sina-olfati"><IconButton><GitHubIcon/></IconButton></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+989941669736"><IconButton><WhatsAppIcon/></IconButton></a></li>
              </ul>
            </div>

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
