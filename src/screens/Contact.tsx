import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

// Components
import Menu from '../components/menu/Menu';

// Images

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
  return (
    <div>
        <Menu />
        <div className='contact-container'>
        <div className='social-links'>
            <div>
                <ul>
                    <li><a href="mailto:sinaolfati6@gmail.com"><EmailIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>sinaolfati6@gmail.com</span></a></li>
                    <li><a href="tel:+989941669736"><PhonelinkRingIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>+98994-166-9736</span></a></li>
                    <li><a href="https://www.linkedin.com/in/sina-olfati-872950233"><LinkedInIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>sina-olfati-872950233</span></a></li>
                    <li><a href="https://github.com/sina-olfati"><GitHubIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>sina-olfati</span></a></li>
                    <li><a href="https://www.instagram.com/sina_._olfati"><InstagramIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>sina_._olfati</span></a></li>
                    <li><a><TelegramIcon style={{fontSize: '2.2rem', position: "relative", top: "8px"}}/><span>@sinaolfati</span></a></li>
                </ul>
            </div>
            <img src='ss' />
        </div>
        <div className='email-me'>
            <img src='ss' />
            <div></div>
        </div>
        <div className='the-end'>
            <img src='ss' />
            <h1></h1>
        </div>
        </div>
    </div>
  )
}

export default Contact
