import React, {useEffect, useState} from 'react'
import './Home.css'
// components
import Menu from '../components/Menu'
import One from '../components/home/One'


const Home = () => {

  return (
    <div className='home-container'>
      {/* <One /> */}
      <Menu />
      <body>
    <main>
      <section className="no-parallax">
        <h1>"Im a programmar to build user interfaces with React"</h1>
      </section>
      <section className="parallax bg">
        <h1>
          I am, <br />
          <span>SINA OLFATI</span>
        </h1>
      </section>
      <section className="no-parallax">
        <h1>Have a nice day!</h1>
      </section>
    </main>
  </body>
    </div>
  )
}

export default Home
