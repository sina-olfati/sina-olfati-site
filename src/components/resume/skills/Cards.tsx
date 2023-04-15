import React from 'react'
import './Cards.css'


// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


type Props = {
    skills: string[]
}

const Cards:React.FC<Props> = ({skills}) => {

    return (
    <div className='cards-html' dir='ltr'>
        <div className='cards-body reveal'>
            <div className='cards-container'>

                {skills.map((skill: any) => 
                    <div className='cards-card' key={skill}>
                        <h2>{skill}</h2>
                    </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default Cards
