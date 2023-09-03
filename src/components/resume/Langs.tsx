import React, {useEffect, useState} from 'react'
import './Langs.css'

// utils
import Title from '../../utils/title/Title'

// Images
import english from '../../assets/images/languages/english.webp'
import persian from '../../assets/images/languages/persian.webp'
import kurdish from '../../assets/images/languages/kurdish.webp'

// i18next
import { useTranslation } from "react-i18next";

// Reveal
import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


const languages = [
  {
    name: "english",
    pic: english
  },
  {
    name: "persian",
    pic: persian
  },
  {
    name: "kurdish",
    pic: kurdish
  },
]


const Langs = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  const isEn = language === "en" ? 'ltr' : 'rtl'

  const { t } = useTranslation()

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [check])
  // }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='langs-container' lang={language} dir={isEn}>
      <div className='langs-sub-container'>

        <Title title="languages" />
        
        <div className='langs' dir='ltr'>
          <div className='container'>

            {languages.map( item => (
              <div className='box reveal' key={item.name}>
                <div className='imgBx'>
                  <img src={item.pic} alt={item.name} />
                </div>
                <div className='content'>
                  <div>
                    <h2>{t(`languages.${item.name}`)}</h2>
                    <p>{t(`languages.${item.name}-level`)}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Langs