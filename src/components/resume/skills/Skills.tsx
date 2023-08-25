import React, {useEffect, useState} from 'react'
import './Skills.css'

// i18next
import { useTranslation } from "react-i18next";

// components
import Cards from './Cards'

// utils
import Title from '../../../utils/title/Title';

// Reveal
import reveal from '../../../assets/js/reveal';
import '../../../assets/css/reveal.css'

// icons
// framework
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
// I18n
import LanguageIcon from '@mui/icons-material/Language';
// PWA
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
// programming language js html css ts
import CodeIcon from '@mui/icons-material/Code';
// data redux zustand axios
import DataObjectIcon from '@mui/icons-material/DataObject';
// SPA
import BoltIcon from '@mui/icons-material/Bolt';
// Design MUI Bootstrap responsive
import BrushIcon from '@mui/icons-material/Brush';
// git hub docker
import SdStorageIcon from '@mui/icons-material/SdStorage';
// scrum
import GroupsIcon from '@mui/icons-material/Groups';

// 22 elements
const skills = [
  {name: "React.Js", icon: <FilterFramesIcon />}, 
  {name: "Next.Js", icon: <FilterFramesIcon />}, 
  {name: "TypeScript", icon: <CodeIcon />},
  {name: "PWA", icon: <InstallDesktopIcon />}, 
  {name: "i18next", icon: <LanguageIcon />},
  {name: "Redux", icon: <DataObjectIcon />},
  {name: "Redux-Thunk", icon: <DataObjectIcon />},
  {name: "Zustand", icon: <DataObjectIcon />},
  {name: "TanStack Query", icon: <DataObjectIcon />}, 
  {name: "Axios", icon: <DataObjectIcon />}, 
  {name: "Rest API", icon: <DataObjectIcon />}, 
  {name: "SPA", icon: <BoltIcon />}, 
  {name: "Material UI", icon: <BrushIcon />},
  {name: "Tailwind", icon: <BrushIcon />}, 
  {name: "Bootstrap", icon: <BrushIcon />}, 
  {name: "Responsive Design", icon: <BrushIcon />}, 
  {name: "Docker", icon: <SdStorageIcon />},
  {name: "Git", icon: <SdStorageIcon />}, 
  {name: "JavaScript", icon: <CodeIcon />}, 
  {name: "CSS", icon: <CodeIcon />}, 
  {name: "HTML", icon: <CodeIcon />}, 
  {name: "Scrum", icon: <GroupsIcon />},
]


const Skills = () => {


  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])


  return (
    <div className='skills-container' >
      <div className='skills-sub-container'>
        
        <Title title="skills" />

        <div className='skills-cards-container-desktop reveal'>
            <Cards skills={skills.slice(0, 6)} id='1' />
            <Cards skills={skills.slice(6, 12)} id='2'/>
            <Cards skills={skills.slice(12, 18)} id='3'/>
            <Cards skills={skills.slice(18, 22)} id='4'/>
        </div>

        <div className='skills-cards-container-mobile reveal'>
            <Cards skills={skills.slice(0, 3)} id='11'/>
            <Cards skills={skills.slice(3, 6)} id='22'/>
            <Cards skills={skills.slice(6, 9)} id='33'/>
            <Cards skills={skills.slice(9, 12)} id='44'/>
            <Cards skills={skills.slice(12, 15)} id='55'/>
            <Cards skills={skills.slice(15, 18)} id='66'/>
            <Cards skills={skills.slice(18, 21)} id='77'/>
            <Cards skills={skills.slice(21, 22)} id='88'/>
        </div>

      </div>
    </div>
  )
}

export default Skills
