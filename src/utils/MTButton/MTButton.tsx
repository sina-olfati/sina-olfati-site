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
        <a className="MTB-link" {...href ? href={href} : null} {...download ? download={download} : null}>
            <div className="MTB-button">
                <span className="micro-transition">
                    {icon1}
                    {icon2}
                    {/* <FileDownloadIcon />
                    <DescriptionIcon /> */}
                </span>
                <Button type={type}>{t(`${text}`)}</Button>
            </div>
        </a>
    </div>
  )
}

export default MTButton
