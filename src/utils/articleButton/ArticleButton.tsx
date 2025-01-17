import React, { useState } from 'react'
import "./ArticleButton.css"
import { useTranslation } from 'react-i18next';

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

// MUI
import { IconButton } from '@mui/material';
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

                    <img src={image} alt="my educational document" onClick={(e) => dontDo(e)} />

                    <div className='AB-data'>
                        <h2>{t(`article.${name}-title`)}</h2>
                        <a href={link} target="_blank" rel="noreferrer"><h3>{t(`article.${name}-publication`)}</h3></a>
                        <h6>{year} - {t(`article.${name}-language`)}</h6>
                        <p>{t(`article.${name}-writers`)}</p>
                        <p>{indexing}</p>
                        <p>{t(`article.${name}-keywords`)}</p>
                        <p>{t(`article.${name}-abstract`)}</p>
                    </div>
                </div>

            </div>
        </Modal>

    </div>
  )
}

export default ArticleButton
