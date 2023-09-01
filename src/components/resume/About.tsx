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

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [check])
  // }, [localStorage.getItem("i18nextLng")])

  // other
  const data: any = [
    {name: 'experience', num: '3+'},
    {name: 'projects', num: '15+'},
    {name: 'companies', num: '2'},
  ]

  return (
    <div className='about-container' lang={language}>
      <Title title='about' />

      {/* content in the center */}
      <div className='centering'>
        <div className='about-content'>

            {/* image */}
            <div className="image reveal"></div>

            {/* texts */}
            <div className="info">
            <p className='reveal'>{t("about.describtion")}</p>
            <ul className='items reveal'>
                {data.map((i: any) => (
                    <li className='item' key={i.name}>
                        <h3>{i.num}</h3>
                        <p>{t(`about.${i.name}`)}</p>
                    </li>
                ))}
            </ul>
            <div className="contact-button reveal">
                <MTButton text={"contact"}  href="#contact"  download=""  icon1={<RingVolumeIcon />}  icon2={<CallEndIcon />} type="submit" />
            </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default About
