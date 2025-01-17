import React, { useState } from 'react'
import "./ArticleButton.css"

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

// MUI
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';


interface Key {
    key: string,
    image: string
}


const ArticleButton = ({key, image}: Key) => {

    const [modal, setModal] = useState(false)

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

                    <p>Hiiii</p>
                    {/* <img src={image} alt="my educational document" onClick={(e) => dontDo(e)} /> */}
                </div>

            </div>
        </Modal>

    </div>
  )
}

export default ArticleButton
