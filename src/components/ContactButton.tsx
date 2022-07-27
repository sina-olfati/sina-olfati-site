import React from 'react'
import { Link } from 'react-router-dom'
import './ContactButton.css'


const ContactButton = () => {
  return (
    <div className='contact'>
      <Link to={"/contact"} className="contactLink">
          Contact With Me
      </Link>
    </div>
  )
}

export default ContactButton
