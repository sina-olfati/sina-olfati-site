import React, {useEffect, useState} from 'react'
import './Work.css'

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';


// i18next
import { useTranslation } from "react-i18next";

// Reveal
// import reveal from '../../assets/js/reveal';
// import '../../assets/css/reveal.css'
// window.addEventListener('scroll', reveal)


const Work = () => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
  
    const { t } = useTranslation()
  
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [localStorage.getItem("i18nextLng")])
   
  
    return (
      <div className='work-container' lang={language}>
        <div className='work-items'>
          <div className='work-work'>
            <h1><BusinessCenterIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("resume-work-work-work")}</h1>
            <div className='work-work-one reveal'>
              <div className='div-one'>1</div>
              <div className='div-two'> 
              <h2>&nbsp;{t("resume-work-work-title")}</h2>
              <h3>{t("resume-work-work-place")}</h3>
              <h6>{t("resume-work-work-time")} <br /> {t("resume-work-work-workplace")}</h6>
              <p>{t("resume-work-work-about")}</p>
              </div>
            </div>
            
          </div>

          <div className='work-work border'>
          <h1><SchoolIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("resume-work-edu-education")}</h1>
            <div className='work-work-one reveal'>
              <div className='div-one'>1</div>              
              <div className='div-two'> 
              <h2>&nbsp;{t("resume-work-edu-one-title")}</h2>
              <h3>{t("resume-work-edu-one-place")}</h3>
              <h6>{t("resume-work-edu-one-time")} <br /> {t("resume-work-edu-one-workplace")}</h6>
              <p>{t("resume-work-edu-one-about")}</p>
              </div>
            </div>

            <div className='work-work-one reveal'>
              <div className='div-one'>2</div>             
              <div className='div-two'> 
              <h2>&nbsp;{t("resume-work-edu-two-title")}</h2>
              <h3>{t("resume-work-edu-two-place")}</h3>
              <h6>{t("resume-work-edu-two-time")}</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Work
