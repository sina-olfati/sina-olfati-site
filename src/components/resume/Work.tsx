import React, {useEffect, useState} from 'react'
import './Work.css'

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

// i18next
import { useTranslation } from "react-i18next";

// Reveal
import '../../assets/css/reveal.css'

const work =[
  {
    num: 1,
    name: "iranfavagostaresh",
    link: "https://vmodel.app"
  },
  {
    num: 2,
    name: "vmodel",
    link: "https://vmodel.app"
  },
  // {
  //   num: 2,
  //   name: "clickhub",
  //   link: "https://clickhub.ir"
  // },
]

const education =[
  {
    num: 1,
    name: "univercity",
    link: "https://shirazu.ac.ir"
    // link: "https://taap.cfu.ac.ir"
  },
  {
    num: 2,
    name: "english",
    link: ""
  },
  {
    num: 3,
    name: "kangaroo",
    link: "https://www.mathkangaroo.in"
  },
]


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

          <div className='work-work border'>
            <h1><BusinessCenterIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("resume-work-work-work")}</h1>

            {work.map(item => (
              <div className='work-work-one reveal' key={item.name}>
                <div className='div-one'>{item.num}</div>
                <div className='div-two'> 
                  <h2>{t(`resume-work-work-${item.name}-title`)}</h2>
                  <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`resume-work-work-${item.name}-place`)}</h3></a>
                  <h5>{t(`resume-work-work-${item.name}-place-describe`)}</h5>
                  <h6>{t(`resume-work-work-${item.name}-time`)} <br /> {t(`resume-work-work-${item.name}-workplace`)}</h6>
                  <ul>
                    <li>{t(`resume-work-work-${item.name}-about1`)}</li>
                    <li>{t(`resume-work-work-${item.name}-about2`)}</li>
                    <li>{t(`resume-work-work-${item.name}-about3`)}</li>
                    <li>{t(`resume-work-work-${item.name}-about4`)}</li>
                  </ul>
                </div>
              </div>
            ))}
            
          </div>



          <div className='work-work'>
            <h1><SchoolIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("resume-work-edu-education")}</h1>

            {education.map(item => (
              <div className='work-work-one reveal' key={item.name}>
                <div className='div-one'>{item.num}</div>              
                <div className='div-two'> 
                <h2>{t(`resume-work-edu-${item.name}-title`)}</h2>
                <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`resume-work-edu-${item.name}-place`)}</h3></a>
                <h6>{t(`resume-work-edu-${item.name}-time`)} <br /> {t(`resume-work-edu-${item.name}-workplace`)}</h6>
                <p>{t(`resume-work-edu-${item.name}-about`)}</p>
                </div>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    );
}

export default Work
