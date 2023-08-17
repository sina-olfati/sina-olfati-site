import React, {useEffect, useState} from 'react'
import './Front.css'
// @ts-ignore
import SinaOlfatiResume from '../assets/cv/SinaOlfatiResume.pdf'

// pictures
import Me from '../../assets/images/me.png'

// MUi
import { Button, IconButton } from '@mui/material';

// icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


// i18next
import { useTranslation } from "react-i18next";


const Front = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])



  return (
    <div className='front-container' lang={language}>
      
        {/* data in the center */}
        <div className='data'>
            {/* texts */}
            <div className='texts'>
                <h1>Hi, I'm Sina</h1>
                {/* <h1>سلام من سیناام</h1> */}
                <h3>Frontend developer</h3>
                <p>My Description</p>
                <div className='cv-button'><span className='micro-transition'><FileDownloadIcon /><DescriptionIcon /></span><Button>Download CV</Button></div>
            </div>
            {/* image */}
            <div className='image-container'>
                <img src={Me} alt="my picture sina olfati" />
            </div>
        </div>

        {/* links */}
        <div className='fastLinks'>
            <ul>
                <li><a href="https://www.linkedin.com/in/sina-olfati-872950233" target="_blank" rel="noreferrer"><IconButton><LinkedInIcon/></IconButton></a></li>
                <li><a href="https://github.com/sina-olfati" target="_blank" rel="noreferrer"><IconButton><GitHubIcon/></IconButton></a></li>
                <li><a href="mailto:sinaolfati6@gmail.com" target="_blank" rel="noreferrer"><IconButton><EmailIcon/></IconButton></a></li>
            </ul>
        </div>

    </div>
  )
}

export default Front