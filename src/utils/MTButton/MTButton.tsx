import React from 'react'
import './MTButton.css'

// MUI
import { Button } from '@mui/material';

// i18next
import { useTranslation } from "react-i18next";


const MTButton = ({text, href, download, icon1, icon2, type='button'}: any) => {

    const { t } = useTranslation();

  return (
    <div className='MTB-container'>
        {/* {href === "#contact" ? <a className="MTB-link" {...href ? href={href} : null} {...download ? download={download} : null}> : <a className="MTB-link" {...href ? href={href} : null} {...download ? download={download} : null} target="_blank" rel="noreferrer" >} */}
        <a className="MTB-link" {...href ? href={href} : null} {...download ? download={download} : null} rel='noreferrer'>
            <div className="MTB-button">

                <div className='MTB-center'>
                    <span className="micro-transition">
                        {icon1}
                        {icon2}
                    </span>
                    <p>{t(`buttons.${text}`)}</p>
                </div>

                {/* <Button type={type} variant='contained'>isna</Button> */}
                <div className='MTB-mui-button'>
                    <Button type={type}></Button>
                </div>

            </div>
        </a>
    </div>
  )
}

export default MTButton
