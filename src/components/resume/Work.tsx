import React, {useEffect, useState} from 'react'
import './Work.css'

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';


// i18next
import { useTranslation } from "react-i18next";

// Reveal
import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


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
              <h2>{t("resume-work-work-second-title")}</h2>
              <a href='https://vmodel.app/'><h3>{t("resume-work-work-second-place")}</h3></a>
              <h5>{t("resume-work-work-second-place-describe")}</h5>
              <h6>{t("resume-work-work-second-time")} <br /> {t("resume-work-work-second-workplace")}</h6>
              <p>{t("resume-work-work-second-about")}</p>
              </div>
            </div>

            <div className='work-work-one reveal'>
              <div className='div-one'>2</div>
              <div className='div-two'> 
              <h2>{t("resume-work-work-first-title")}</h2>
              <a href='https://clickhub.ir'><h3>{t("resume-work-work-first-place")}</h3></a>
              <h5>{t("resume-work-work-first-place-describe")}</h5>
              <h6>{t("resume-work-work-first-time")} <br /> {t("resume-work-work-first-workplace")}</h6>
              <p>{t("resume-work-work-first-about")}</p>
              </div>
            </div>
            
          </div>

          <div className='work-work border'>
          <h1><SchoolIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("resume-work-edu-education")}</h1>

            <div className='work-work-one reveal'>
              <div className='div-one'>1</div>              
              <div className='div-two'> 
              <h2>{t("resume-work-edu-one-title")}</h2>
              <a href='https://taap.cfu.ac.ir'><h3>{t("resume-work-edu-one-place")}</h3></a>
              <h6>{t("resume-work-edu-one-time")} <br /> {t("resume-work-edu-one-workplace")}</h6>
              <p>{t("resume-work-edu-one-about")}</p>
              </div>
            </div>

            <div className='work-work-one reveal'>
              <div className='div-one'>2</div>              
              <div className='div-two'> 
              <h2>{t("resume-work-edu-two-title")}</h2>
              <a><h3>{t("resume-work-edu-two-place")}</h3></a>
              <h6>{t("resume-work-edu-two-time")} <br /> {t("resume-work-edu-two-workplace")}</h6>
              </div>
            </div>

            <div className='work-work-one reveal'>
              <div className='div-one'>3</div>             
              <div className='div-two'> 
              <h2>{t("resume-work-edu-three-title")}</h2>
              <a href='https://www.mathkangaroo.in'><h3>{t("resume-work-edu-three-place")}</h3></a>
              <h6>{t("resume-work-edu-three-time")}</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Work
