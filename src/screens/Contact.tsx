import React, {useEffect, useState} from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

// Components
import Menu from '../components/menu/Menu';
import EmailMe from '../components/contact/EmailMe';

// Images
import links from  '../assets/images/links.jpg'
import email from  '../assets/images/email.jpg'
import idea from '../assets/images/idea.jpg'

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


// i18next
import { useTranslation } from "react-i18next";


const Contact = () => {


    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
    
    const { t } = useTranslation()
    
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [localStorage.getItem("i18nextLng")])


  return (
    <div lang={language}>
        <Menu />
        <div className='contact-container'>
        <div className='social-links'>
            <div>
                <ul>
                    <li><a href="mailto:sinaolfati6@gmail.com"><EmailIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sinaolfati6@gmail.com</span></a></li>
                    <li><a href="tel:+989941669736"><PhonelinkRingIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>+989941669736</span></a></li>
                    <li><a href="https://www.linkedin.com/in/sina-olfati-872950233"><LinkedInIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina-olfati-872950233</span></a></li>
                    <li><a href="https://github.com/sina-olfati"><GitHubIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina-olfati</span></a></li>
                    <li><a href="https://www.instagram.com/sina_._olfati"><InstagramIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina_._olfati</span></a></li>
                    <li><a><TelegramIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>@sinaolfati</span></a></li>
                </ul>
            </div>
            <img src={ links } />
        </div>
        <div className='email-me'>
            <img src={ email } />
            <div className='form-container'>
                <EmailMe />
            </div>
        </div>
        <div className='the-end'>
            <img src={idea} />
            <h1>Im now learning... New updates will come</h1>
        </div>
        </div>
    </div>
  )
}

export default Contact
