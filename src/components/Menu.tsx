import React, {useEffect, useState} from 'react'
import "./Menu.css"

const Menu = () => {

    const [active, setActive] = useState(false)

    useEffect

  return (
    <div>
      <div className='header'>
        <input className='menu-button' onClick={() => setActive(true)} type="button" value="Menu" />
      </div>
      <div className= {active ? 'menu-circle active' : 'menu-circle'} id={localStorage.getItem("i18nextLng") == "fa" ? "fa" : "en"} onMouseLeave={() => setActive(false)}>
        hidds
      </div>
    </div>
  )
}

export default Menu
