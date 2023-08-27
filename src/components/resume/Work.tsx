import React, {useEffect, useState} from 'react'
import './Work.css'

// utils
import DocButton from '../../utils/docButton/DocButton';
import car from '../../assets/images/portfolio/luckyDuck.webp'

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
    link: "https://shirazu.ac.ir",
    // link: "https://taap.cfu.ac.ir"
    file: ""
  },
  {
    num: 2,
    name: "english",
    link: "",
    file: car,
  },
  {
    num: 3,
    name: "kangaroo",
    link: "https://www.mathkangaroo.in",
    file: car,
  },
]


const Work = () => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
  
    const { t } = useTranslation()
  
    const check = localStorage.getItem("i18nextLng");

    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [check])
    // }, [localStorage.getItem("i18nextLng")])
   
  
    return (
      <div className='work-container' lang={language}>
        <div className='work-sections'>

          <div className='work-section border'>
            <h1><BusinessCenterIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("work.title")}</h1>

            {work.map(item => (
              <div className='work-item reveal' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{item.num}</span>
                </div>
                <div className='item-data'> 
                  <h2>{t(`work.${item.name}-title`)}</h2>
                  <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`work.${item.name}-place`)}</h3></a>
                  <h5>{t(`work.${item.name}-place-describe`)}</h5>
                  <h6>{t(`work.${item.name}-time`)} <br /> {t(`work.${item.name}-workplace`)}</h6>
                  <ul>
                    <li>{t(`work.${item.name}-about1`)}</li>
                    <li>{t(`work.${item.name}-about2`)}</li>
                    <li>{t(`work.${item.name}-about3`)}</li>
                    <li>{t(`work.${item.name}-about4`)}</li>
                  </ul>
                </div>
              </div>
            ))}
            
          </div>



          <div className='work-section'>
            <h1><SchoolIcon style={{fontSize: '3rem', position: "relative", top: "8px"}} />{t("education.title")}</h1>

            {education.map(item => (
              <div className='work-item reveal' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{item.num}</span>
                  {item.file ? <DocButton image={item.file} /> : null}
                </div>              
                <div className='item-data'> 
                  <h2>{t(`education.${item.name}-title`)}</h2>
                  <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`education.${item.name}-place`)}</h3></a>
                  <h6>{t(`education.${item.name}-time`)} <br /> {t(`education.${item.name}-workplace`)}</h6>
                  <p>{t(`education.${item.name}-about`)}</p>
                </div>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    );
}

export default Work
