import React, {useEffect, useState} from 'react'
import './Work.css'

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


// i18next
import { useTranslation } from "react-i18next";

// Reveal
import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'
import { color } from '@mui/system';
window.addEventListener('scroll', reveal)


const Work = () => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
  
    const { t } = useTranslation()
  
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [localStorage.getItem("i18nextLng")])
   
  
    return (
      <div className='work-container'>
        <div className='work-items'>
          <div className='work-work'>
            <h1><BusinessCenterIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />Work</h1>
            <div className='work-work-one'>
            <h2>React Developer Intern</h2>
            <h3>Clickhub (Noavaran Dadepardaz click)</h3>
            <h6>05/2022-Present<br/>Tehran-Iran</h6>
            <p>Learned TypeScript, Material UI, PWA, Docker, Scrum, Formik, Redux and...</p>
            </div>
            
          </div>

          <div className='work-edu'>education</div>
        </div>
      </div>
    );
}

export default Work
