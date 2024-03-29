import React from 'react'
import "./UpButton.css"

// icon
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from '@mui/material';

// costum hook
import useHeightCheck from '../../hooks/UseHeightCheck';


const UpButton = () => {

    // checking scrool amount of page
    const isHeightHigher: any = useHeightCheck()
    // console.log("isHeightHigher: ", isHeightHigher)

  return (
    <div className={`UB-container ${isHeightHigher ? 'UB-scrolled' : ''}`}>
      <a href='#home'>
        <IconButton></IconButton>
        <div className='UB-micro-transition'>
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
        </div>
      </a>
    </div>
  )
}

export default UpButton
