import React, { useEffect, useState } from 'react'
import './About.css'
// @ts-ignore
import SinaOlfatiResume from "../../assets/cv/SinaOlfatiResume.pdf";

// utils
import Title from '../../utils/title/Title';
import MTButton from '../../utils/MTButton/MTButton';

// iconst
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// i18next
import { useTranslation } from "react-i18next";

// Reveal
import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)

const About = () => {

  // lang
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])

  // other
  const data: any = [
    {name: 'experience', num: '2'},
    {name: 'projects', num: '10+'},
    {name: 'companies', num: '2'},
  ]

  return (
    <div className='about-container'>
      <Title title='ABOUT ME' />

      {/* content in the center */}
      <div className='centering'>
        <div className='about-content'>

            {/* image */}
            <div className="image"></div>

            {/* texts */}
            <div className="info">
            <p>{t("resume-describtion")}</p>
            <ul className='items'>
                {data.map((i: any) => (
                    <li className='item'>
                        <h3>{i.num}</h3>
                        <p>{t(`resume-${i.name}`)}</p>
                    </li>
                ))}
            </ul>
            <div className="cv-button">
                <MTButton  text={"front_cv"}  href={SinaOlfatiResume}  download={SinaOlfatiResume}  icon1={<FileDownloadIcon />}  icon2={<DescriptionIcon />}/>
            </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default About
