import React from 'react'
import './Portfolio.css'

// Components
import Menu from '../components/menu/Menu'

const Portfolio = () => {
  return (
    <div className='port-container'>
        <Menu />
        <div className='port-cards'>
          <div className='card'>
            <div className='card-picture'>
              <p>Sina's Site</p>
              <img src='ss'/>
            </div>
            <div className='card-text'>
              <h1>Sina's Site</h1>
              <h2>describtion</h2>
              <h3>technologies</h3>
              <a href='#'>Visit the site</a>
            </div>
          </div>
          <div className='card'>Two</div>
        </div>
    </div>
  )
}

export default Portfolio
