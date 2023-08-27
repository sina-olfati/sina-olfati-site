import React, { useState } from 'react'
import "./DocButton.css"

// utils
import Modal from '@mui/material/Modal';
import car from '../../assets/images/portfolio/luckyDuck.webp'

// icon
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DescriptionIcon from "@mui/icons-material/Description";

// MUI
import { IconButton } from '@mui/material';

// costum hook


const DocButton = () => {

    const [modal, setModal] = useState(true)

    const dontDo = (e: any) => {
        e.preventDefault();
        e.stopPropagation()
    }

  return (
    <div className="DB-container">

      {/* button */}
      <a onClick={() => setModal(true)}>
        <IconButton></IconButton>
        <div className='DB-micro-transition'>
            <DescriptionIcon />
            <RemoveRedEyeIcon />
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
            <img src={car} alt="" onClick={(e) => dontDo(e)} />
        </div>
    </Modal>

    </div>
  )
}

export default DocButton
