import React, {useEffect, useState} from 'react'
import './Home2.css'
// @ts-ignore
import SinaOlfatiResume from '../assets/cv/SinaOlfatiResume.pdf'

// components
import Menu from '../components/menu/Menu'
import About from '../components/home/About';
import Front from '../components/home/Front';

// MUi
import { Button, IconButton } from '@mui/material';

// icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';


// i18next
import { useTranslation } from "react-i18next";


const Home = () => {


  const [bodyDir, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])



  return (
    <div className='home-container' lang={bodyDir}>
      {/* <Menu page= "home"/> */}
      
      <Front />

    </div>
  )
}

export default Home
