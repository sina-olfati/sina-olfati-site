import React, {useEffect, useState} from 'react'
import './Work.css'

// utils
import DocButton from '../../utils/docButton/DocButton';

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

// images
import kangaroo from '../../assets/images/education/kangaroo.jpg'
import english from '../../assets/images/education/english.jpg'

// i18next
import { useTranslation } from "react-i18next";

// Reveal
import '../../assets/css/reveal.css'

const work =[
  {
    num: 1,
    name: "freelancing",
    link: ""
  },
  {
    num: 2,
    name: "iranfavagostaresh",
    link: "https://vmodel.app"
  },
  {
    num: 3,
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
    file: english,
  },
  {
    num: 3,
    name: "kangaroo",
    link: "https://www.mathkangaroo.in",
    file: kangaroo,
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

    // month difference calculator
    const monthDiff = (startDate: any, endDate: any) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

    return (
      <div className='work-container' lang={language}>
        <div className='work-sections'>

          <div className='work-section border'>
            <h1 className='work-title'><BusinessCenterIcon />{t("work.title")}</h1>

            {work.map(item => (
              <div className='work-item reveal' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{item.num}</span>
                </div>
                <div className='item-data'> 
                  <h2>{t(`work.${item.name}-title`)}</h2>
                  { item.link ? <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`work.${item.name}-place`)}</h3></a>  : null }
                  { item.link ? <h5>{t(`work.${item.name}-place-describe`)}</h5> : null }
                  <h6>
                    {t(`work.${item.name}-time`)} {monthDiff(new Date('2018-01-01'), new Date('2021-01-01')) > 12 ? `` : monthDiff(new Date('2018-01-01'), new Date('2021-01-01'))} months
                    <br /> 
                    { item.link ? t(`work.${item.name}-workplace`) : null }
                  </h6>
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
            <h1 className='work-title'><SchoolIcon />{t("education.title")}</h1>

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
