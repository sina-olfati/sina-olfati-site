import React from 'react'

// Gif
import gear from '../../assets/GearLoading.png'

const Loader = () => {
  return (
    <div style={{width: "100%", textAlign: "center"}}>
      <img src={gear} alt='Loading'/>
    </div>
  )
}

export default Loader
