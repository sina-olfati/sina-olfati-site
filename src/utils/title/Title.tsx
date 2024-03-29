import React, { useEffect, useState } from 'react'
import './Title.css'
import { useTranslation } from 'react-i18next';

// const circles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

const Title = ({title}: any) => {

  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));

  const { t } = useTranslation();

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [check]);
  // }, [localStorage.getItem("i18nextLng")]);


  return (
    <div className='title-container' lang={language}>
        <div className='title'>

            {/* <div className='front'>{t(`${title}`)}</div> */}
            <div className='front'>{t(`titles.${title}`)}</div>
            
            {/* <div className='behind'>

                {circles.map((i) => (
                    <div className={i} key={i}></div>
                ))}

            </div> */}
        </div>
    </div>
  )
}

export default Title
