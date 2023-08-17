import React, {useEffect, useState} from 'react'
import './Front.css'
// @ts-ignore
import SinaOlfatiResume from '../../assets/cv/SinaOlfatiResume.pdf'
import Menu from '../menu/Menu'

// pictures
import Me from '../../assets/images/me.png'

// MUi
import { Button } from '@mui/material';

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


  // installing PWA
  // let deferredPrompt: any;
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //       deferredPrompt = e;
  //   });

  //   const installApp = document.getElementById('installApp');
  //   installApp.addEventListener('click', async () => {
  //       if (deferredPrompt !== null) {
  //           deferredPrompt.prompt();
  //           const { outcome } = await deferredPrompt.userChoice;
  //           if (outcome === 'accepted') {
  //               deferredPrompt = null;
  //           }
  //       }
  //   });



  return (
    <div className='front-container' lang={language}>
      {/* <Menu /> */}
        {/* data in the center */}
        <div className='data'>

            {/* links */}
            <div className='fast-links'>
                <ul>
                    <li><a href="https://www.linkedin.com/in/sina-olfati-872950233" target="_blank" rel="noreferrer"><Button><LinkedInIcon/></Button></a></li>
                    <li><a href="https://github.com/sina-olfati" target="_blank" rel="noreferrer"><Button><GitHubIcon/></Button></a></li>
                    <li><a href="mailto:sinaolfati6@gmail.com" target="_blank" rel="noreferrer"><Button><EmailIcon/></Button></a></li>
                </ul>
            </div>

            {/* texts */}
            <div className='texts'>
                <h1>Hi, I'm Sina Olfati</h1>
                {/* <h1><h2>Hi, I'm </h2>Sina Olfati</h1> */}
                {/* <h1>سلام، من سینا الفتی‌ام</h1> */}
                <h3>Front-end Developer</h3>
                <p>Highly skilled and passionate developer with expertise in React.Js and Next.Js. Proven track record of delivering high-quality software solutions. Strong problem-solving abilities and a dedication to continuous learning. Experienced in collaborating with cross-functional teams and delivering projects on time. Committed to optimizing user experiences and driving innovation. Open to new challenges and eager to contribute to a dynamic and growth-oriented company!</p>

                <a className='cv-link' href={SinaOlfatiResume} download={SinaOlfatiResume}>
                  <div className='cv-button'>
                    <span className='micro-transition'>
                      <FileDownloadIcon />
                      <DescriptionIcon />
                    </span>
                    <Button>Download CV</Button>
                  </div>
                </a>

            </div>
            {/* image */}
            <div className='image-container'>
                <img src={Me} alt="my picture sina olfati" />
            </div>
        </div>

        <div className='scroll'>
          {/* <h2>{t("home_scroll")}</h2> */}
          <div className='arrows'>
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>

    </div>
  )
}

export default Front