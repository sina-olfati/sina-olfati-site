import React, {useEffect, useState} from 'react'
import './Contact.css'

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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
        window.scrollTo(0, 0);
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
                    <li><a href="https://api.whatsapp.com/send?phone=+989941669736"><WhatsAppIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>+989941669736</span></a></li>
                    <li><a href="https://telegram.me/sinaolfati"><TelegramIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>@sinaolfati</span></a></li>
                    <li><a href="https://www.linkedin.com/in/sina-olfati-872950233"><LinkedInIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina-olfati-872950233</span></a></li>
                    <li><a href="https://github.com/sina-olfati"><GitHubIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina-olfati</span></a></li>
                    <li><a href="https://www.instagram.com/sina_._olfati"><InstagramIcon style={{fontSize: '2.2rem', position: "relative", top: "11px"}}/><span dir='ltr'>sina_._olfati</span></a></li>
                </ul>
            </div>
            <img src={ links } alt='Boy sitting on Laptop and aLink' />
        </div>
        <div className='email-me'>
            <img src={ email } alt='Guy recieving Emials'/>
            <div className='form-container'>
                <EmailMe />
            </div>
        </div>
        <div className='the-end'>
            <img src={idea} alt='Boy having new Ideas'/>
            <h1>{t("contact-update")}</h1>
        </div>
        </div>
    </div>
  )
}

export default Contact
