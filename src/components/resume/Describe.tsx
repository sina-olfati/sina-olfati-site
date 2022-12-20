import React, {useEffect, useState} from 'react'
import './Describe.css'
import resumepic from '../../assets/images/resume1.png'

// i18next
import { useTranslation } from "react-i18next";

// mui
import { Button } from '@mui/material';

// icons
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';


const Describe = () => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='describe-container'>

      <div className='describe' lang={language}>
        <img src={resumepic} alt='Boy Talking' />
        <p>{t("resume-describtion")}</p>
      </div>

      <div className='file' lang={language}>
        <a href="/../../../public/assets/cv/SinaResume13.pdf" download>
          <Button>
            <DescriptionIcon />
            <p>DOWNLOAD CV</p>
          </Button>
        </a>
      </div>

    </div>
  )
}



export default Describe
