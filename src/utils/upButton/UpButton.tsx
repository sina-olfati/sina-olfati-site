import React from 'react'
import "./UpButton.css"

// icon
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from '@mui/material';


const UpButton = () => {
  return (
    <div className='UB-container'>
      <a href='#home'>
        <IconButton></IconButton>
        <div className='micro-transition2'>
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
        </div>
      </a>
    </div>
  )
}

export default UpButton
