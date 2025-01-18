import React, { useState } from 'react'
import "./DocButton.css"

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// MUI
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';

interface DocButtonProps {
  image: string; // Type for the PNG file, imported as a URL string
}


const DocButton: React.FC<DocButtonProps> = ({image}) => {

    const [modal, setModal] = useState(false)

    const dontDo = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

  return (
    <div className="DB-container">

      {/* button */}
      <a onClick={() => setModal(true)}>
        <IconButton></IconButton>
        <div className='DB-micro-transition'>
            <RemoveRedEyeIcon />
            <WorkspacePremiumIcon />
        </div>
      </a>

      {/* @ts-ignore */}
        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className='DB-modal' onClick={() => setModal(false)}>
                <img src={image} alt="my educational document" onClick={(e) => dontDo(e)} />
            </div>
        </Modal>

    </div>
  )
}

export default DocButton
