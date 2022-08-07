import React, {useEffect, useState} from 'react'
import './Langs.css'

// Images
import english from '../../assets/images/english.jpg'
import persian from '../../assets/images/persian.jpg'
import kurdish from '../../assets/images/kurdish.jpg'


// i18next
import { useTranslation } from "react-i18next";


// Reveal
import reveal from '../../assets/js/reveal';
import '../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


const Langs = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  const isEn = language == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='langs-container' lang={isEn ? 'en' : 'fa'} dir={language}>
      <div className='langs-sub-container'>
        <h1>{t("resume-langs-languages")}</h1>
        <h3>{t("resume-langs-describe")}</h3>
        <div className='langs' dir='ltr'>
          <div className='container'>
            <div className='box reveal'>
              <div className='imgBx'>
                <img src={english} alt='English Language' />
              </div>
              <div className='content'>
                <div>
                  <h2>{t("resume-langs-english")}</h2>
                  <p>{t("resume-langs-en-level")}</p>
                </div>
              </div>
            </div>
            <div className='box reveal'>
              <div className='imgBx'>
                <img src={persian} alt='Persian Language' />
              </div>
              <div className='content'>
                <div>
                  <h2>{t("resume-langs-persian")}</h2>
                  <p>{t("resume-langs-fa-level")}</p>
                </div>
              </div>
            </div>
            <div className='box reveal'>
              <div className='imgBx'>
                <img src={kurdish} alt='Kurdish Language' />
              </div>
              <div className='content'>
                <div>
                  <h2>{t("resume-langs-ku")}</h2>
                  <p>{t("resume-langs-ku-level")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Langs

{/* <div className='lang-card'>
  <h2>Persian</h2>
  <p>mother of m langs</p>
</div>
<div className='lang-card'>
  <h2>Kurdish</h2>
  <p>mother of m langs</p>
</div>
<div className='lang-card'>
  <h2>English</h2>
  <p>veryy fluent for real no cap</p>
</div> */}