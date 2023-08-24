import React, { useEffect, useState } from 'react'
import './About.css'

// utils
import Title from '../../utils/title/Title';
import MTButton from '../../utils/MTButton/MTButton';

// icons
import CallEndIcon from '@mui/icons-material/CallEnd';
import RingVolumeIcon from '@mui/icons-material/RingVolume';

// i18next
import { useTranslation } from "react-i18next";

// Reveal
// import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'

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
      <Title title='resume-about' />

      {/* content in the center */}
      <div className='centering'>
        <div className='about-content'>

            {/* image */}
            <div className="image reveal"></div>

            {/* texts */}
            <div className="info">
            <p className='reveal'>{t("resume-describtion")}</p>
            <ul className='items reveal'>
                {data.map((i: any) => (
                    <li className='item'>
                        <h3>{i.num}</h3>
                        <p>{t(`resume-${i.name}`)}</p>
                    </li>
                ))}
            </ul>
            <div className="contact-button reveal">
                <MTButton text={"contact-me"}  href="#contact"  download=""  icon1={<RingVolumeIcon />}  icon2={<CallEndIcon />} type="submit" />
            </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default About
