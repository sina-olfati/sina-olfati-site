import React, {useEffect, useState} from 'react'
import './Langs.css'

// Images
import english from '../../assets/images/english.jpg'
import persian from '../../assets/images/persian.jpg'
import kurdish from '../../assets/images/kurdish.jpg'


// i18next
import { useTranslation } from "react-i18next";


// Reveal
// import reveal from '../../assets/js/reveal';
// import '../../assets/css/reveal.css'
// window.addEventListener('scroll', reveal)


const Langs = () => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
  
    const { t } = useTranslation()
  
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='langs-container'>
      <div className='langs-sub-container'>
        <h1>Languages</h1>
        <h3>plenty of it I know</h3>
        <div className='langs'>
          <div className='container'>
            <div className='box'>
              <div className='imgBx'>
                <img src={english} />
              </div>
              <div className='content'>
                <div>
                  <h2>title</h2>
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img src={persian} />
              </div>
              <div className='content'>
                <div>
                  <h2>title</h2>
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img src={kurdish} />
              </div>
              <div className='content'>
                <div>
                  <h2>title</h2>
                  <p>lorem ipsum</p>
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