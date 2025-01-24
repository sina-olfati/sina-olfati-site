import React, { useEffect } from 'react'
import './Cards.css'


// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


type Props = {
    skills: {name: string, icon: JSX.Element}[],
    id: string
}


const Cards:React.FC<Props> = ({skills, id}) => {


    const addTargetedP = (e: any, id: string) => {
        const container = document.getElementById(id)
        container.classList.add("targetedP");
        // document.getElementsByClassName("cards-card").classList.remove("targetedP");
    }
    const removeTargetedP = (e: any, id: string) => {
        const container = document.getElementById(id)
        container.classList.remove("targetedP");
    }
    
    const addTargeted = (e: any, id: string) => {
        e.target.classList.add("targeted");
        // Array.from(e.target.children).map((i: any) => i.classList.remove("targeted"))

        // const targeted: any = document.getElementsByClassName("targeted")
        const parent: any = document.getElementById(id);
        const children: any = parent.children;

        for (let i = 0; i < parent.children.length; i++) {
            if (children[i] === parent.querySelector('.targeted')) {
                break
            }
            // console.log("here")
            children[i].classList.add('before-targeted');
        }
    }
    
    const removeTargeted = (e: any, id: string) => {
        e.target.classList.remove("targeted");
        const card: any = document.getElementsByClassName("cards-card")
       
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove("before-targeted")
        }
    }

    const removeTargetedChildren = (e: any) => {
        e.preventDefault();
        e.stopPropagation()
    }

    useEffect(() => {
        const svg = document.getElementsByTagName("svg");
        Array.from(svg).map((i: any) => {
            i.onmouseover = (e: any) => removeTargetedChildren(e);
        })
    }, [])
    

    return (
    <div className='cards-html' dir='ltr'>
        <div className='cards-body reveal'>
            <div id={id} className='cards-container' onMouseLeave={(e) => removeTargetedP(e, id)} onMouseOver={(e) => addTargetedP(e, id)}>

                {skills.map((skill: any) => 
                    <div className='cards-card' onMouseLeave={(e) => removeTargeted(e, id)} onMouseOver={(e) => addTargeted(e, id)} key={skill.name}>
                        {/* <h2 className='text'>{skill.name}</h2> */}
                        <h2 className='text' onMouseOver={(e) => removeTargetedChildren(e)}>{skill.name}</h2>
                        {skill.icon}
                    </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default Cards
