import React, {useEffect, useState} from 'react'
import './Describe.css'

// // i18next
import { useTranslation } from "react-i18next";


const Describe = () => {


  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='describe-container'>
      <h2 className='describe' lang={language}>{t("resume-describtion")}</h2>
    </div>
  )
}



export default Describe
