import React, { useEffect, useState } from 'react'
import "./ArticleButton.css"
import { useTranslation } from 'react-i18next';

// images
import ISI from "../../assets/images/articles/ISI.jpg"
import ISC from "../../assets/images/articles/ISC.webp"
import Farhangian from "../../assets/images/articles/Farhangian.png"

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';

// MUI
import { Button, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';


interface ArticleButtonProps {
    name: string,
    image: string,
    link: string,
    year: number,
    indexing: string,
}


const ArticleButton = ({name, image, link, year, indexing}: ArticleButtonProps) => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
      // const isEn = bodyDir == "ltr" ? true : false
    const [modal, setModal] = useState(false)
  
    const { t } = useTranslation()
          
    const check = localStorage.getItem("i18nextLng");
    
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"));
    }, [check]);
    // }, [localStorage.getItem("i18nextLng")]);


    const dontDo = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
        // if (e.target instanceof HTMLAnchorElement) {
        //     return; // Allow <a> clicks to proceed naturally
        // }
        // e.preventDefault();
        e.stopPropagation();
    };

    const keywords = t(`article.${name}-keywords`);
    const separatedKeywords = language === "en" ? keywords.split(", ") : keywords.split("، ");


  return (
    <div className="AB-container" lang={language}>

      {/* button */}
      <div className='AB-button' onClick={() => setModal(true)}>
        <IconButton></IconButton>
        <div className='AB-micro-transition'>
            <RemoveRedEyeIcon />
            <DescriptionIcon />
        </div>
      </div>

        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className='AB-modal' onClick={() => setModal(false)}>

                <div className='AB-content' onClick={(e: React.MouseEvent<HTMLDivElement>) => dontDo(e)}>
                {/* <div className='AB-content' onClick={(e) => e.stopPropagation()}> */}

                    <IconButton onClick={() => setModal(false)} className='close-button'><CloseIcon /></IconButton>

                    <img src={image} alt="my educational document" onClick={(e) => dontDo(e)} />

                    <div className='AB-data' lang={language}>
                        <h2>{t(`article.${name}-title`)}</h2>
                        <a href={link} target="_blank" rel="noreferrer"><h3>{t(`article.${name}-publication`)}</h3></a>
                        <h5>{t(`article.sections.year`)} <b>{year}</b></h5>
                        <h5>{t(`article.sections.language`)} <b>{t(`article.${name}-language`)}</b></h5>
                        <h5>{t(`article.sections.writers`)} <b>{t(`article.${name}-writers`)}</b></h5>
                        <h5 className='withImage'>{t(`article.sections.affiliation`)} <a href='https://cfu.ac.ir' target="_blank" rel="noopener noreferrer"><img src={Farhangian} alt="article's affilation logo" /> <b>{t(`article.${name}-affiliation`)}</b></a></h5>
                        <h5 className='withImage'>{t(`article.sections.indexing`)} <a href={indexing === "ISC" ? "https://isc.ac/en" : "https://www.isindexing.com/isi/"} target="_blank" rel="noopener noreferrer"><img src={indexing === "ISC" ? ISC : ISI} alt="article's indexing logo" /></a></h5>
                        <h6>{t(`article.sections.keywords`)} <br /> 
                            <div>
                                {separatedKeywords.map((keyword) => 
                                    <Button variant='text' key={keyword}>{keyword}</Button>
                                )}
                            </div>
                        </h6>
                        <h6>{t(`article.sections.abstract`)} <br /> <i>{t(`article.${name}-abstract`)}</i></h6>
                    </div>
                </div>

            </div>
        </Modal>

    </div>
  )
}

export default ArticleButton
