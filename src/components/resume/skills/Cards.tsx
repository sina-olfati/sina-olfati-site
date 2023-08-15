import React from 'react'
import './Cards.css'


// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


type Props = {
    skills: string[],
    id: string
}


const Cards:React.FC<Props> = ({skills, id}) => {



    const addTargeted = (e: any, id: string) => {
        // e.target.classList.add("sina")
        // console.log(e.target.classList)
        // var element = document.getElementsByClassName("cards-card");
        e.target.classList.add("targeted");
        e.target.children[0].classList.remove('targeted')

        const targeted: any = document.getElementsByClassName("targeted")
        const parent: any = document.getElementById(id);
        const children: any = parent.children;
        // console.log(parent.targeted);
    
    
        // const siblings: any = parent[0].children;
        // const siblingElements = parent.querySelectorAll('.cards-card');
        // console.log("targeted: ", parent[0].children);
    
        // [...parent.children].every((e: any) => {
        //     if (e === parent.querySelector('.targeted')) {
        //         // console.log(e === parent.querySelector('.targeted'))
        //         // return false
        //     }
        //     console.log("here")
        //     // e.classList.add('before-targeted');
        // });

        for (let i = 0; i < parent.children.length; i++) {
            if (children[i] === parent.querySelector('.targeted')) {
                break
            }
            console.log("here")
            children[i].classList.add('before-targeted');
        }
    }
    
    const removeTargeted = (e: any, id: string) => {
        e.target.classList.remove("targeted");
        const card: any = document.querySelectorAll("before-targeted")
        if (card.length > 0) { card.classList.remove("before-targeted");}
        // console.log(card.classList)
    }
    
    
    const addTargetedP = (e: any, id: string) => {
        const container = document.getElementById(id)
        container.classList.add("targetedP");
        // document.getElementsByClassName("cards-card").classList.remove("targetedP");
    }
    const removeTargetedP = (e: any, id: string) => {
        const container = document.getElementById(id)
        container.classList.remove("targetedP");
    }



    return (
    <div className='cards-html' dir='ltr'>
        <div className='cards-body reveal'>
            <div id={id} className='cards-container' onMouseLeave={(e) => removeTargetedP(e, id)} onMouseOver={(e) => addTargetedP(e, id)}>

                {skills.map((skill: any) => 
                    <div className='cards-card' onMouseLeave={(e) => removeTargeted(e, id)} onMouseOver={(e) => addTargeted(e, id)} key={skill}>
                        <h2 className='text'>{skill}</h2>
                    </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default Cards
