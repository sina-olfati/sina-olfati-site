import React from 'react'
import './Cards.css'


type Props = {
    one: string,
    two: string,
    three: string,
    four: string,
    five: string,
}

const Cards:React.FC<Props> = ({one="1", two="2", three="3", four="4", five="5"}) => {
  return (
    <div className='cards-html' dir='ltr'>
        <div className='cards-body'>
            <div className='cards-container'>
                <div className='cards-card'>
                    <h2>{one}</h2>
                </div>
                <div className='cards-card'>
                    <h2>{two}</h2>
                </div>
                <div className='cards-card'>
                    <h2>{three}</h2>
                </div>
                <div className='cards-card'>
                    <h2>{four}</h2>
                </div>
                <div className='cards-card'>
                    <h2>{five}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
