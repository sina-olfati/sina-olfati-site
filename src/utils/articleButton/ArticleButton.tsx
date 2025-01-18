import React, { useState } from 'react'
import "./ArticleButton.css"
import { useTranslation } from 'react-i18next';

// images
import ISI from "../../assets/images/articles/ISI.jpg"
import ISC from "../../assets/images/articles/ISC.webp"

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CloseIcon from '@mui/icons-material/Close';

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
    console.log(name, image, link, year, indexing)

    const [modal, setModal] = useState(false)

    const { t } = useTranslation()

    const dontDo = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const keywords = t(`article.${name}-keywords`);
    const separatedKeywords = keywords.split(", ");

  return (
    <div className="AB-container">

      {/* button */}
      <a onClick={() => setModal(true)}>
        <IconButton></IconButton>
        <div className='AB-micro-transition'>
            <RemoveRedEyeIcon />
            <UnfoldMoreIcon />
        </div>
      </a>

        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className='AB-modal' onClick={() => setModal(false)}>

                <div className='AB-content' onClick={(e: React.MouseEvent<HTMLDivElement>) => dontDo(e)}>

                    {/* <Button onClick={() => setModal(false)} className='close-button'>ssss</Button> */}
                    <IconButton onClick={() => setModal(false)} className='close-button'><CloseIcon /></IconButton>

                    <img src={image} alt="my educational document" onClick={(e) => dontDo(e)} />

                    <div className='AB-data'>
                        <h2>{t(`article.${name}-title`)}</h2>
                        <a href={link} target="_blank" rel="noreferrer"><h3>{t(`article.${name}-publication`)}</h3></a>
                        <h5>{t(`article.sectinos.year`)} <b>{year}</b></h5>
                        <h5>{t(`article.sectinos.language`)} <b>{t(`article.${name}-language`)}</b></h5>
                        <h5>{t(`article.sectinos.writers`)} <b>{t(`article.${name}-writers`)}</b></h5>
                        <h5>{t(`article.sectinos.indexing`)} <img src={indexing === "ISC" ? ISC : ISI} alt="article's indexing logo" /></h5>
                        <h6>{t(`article.sectinos.keywords`)} <br /> 
                            <div>
                                {separatedKeywords.map((keyword) => 
                                    <Button variant='text'>{keyword}</Button>
                                )}
                            </div>
                        </h6>
                        <h6>{t(`article.sectinos.abstract`)} <br /> <i>{t(`article.${name}-abstract`)}</i></h6>
                    </div>
                </div>

            </div>
        </Modal>

    </div>
  )
}

export default ArticleButton
