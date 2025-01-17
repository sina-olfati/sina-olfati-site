import React, {useEffect, useState} from 'react'
import './Work.css'

// utils
import DocButton from '../../utils/docButton/DocButton';

// Icon
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';

// images
import kangaroo from '../../assets/images/education/kangaroo.jpg'
import english from '../../assets/images/education/english.jpg'

// i18next
import { useTranslation } from "react-i18next";

// Reveal
import '../../assets/css/reveal.css'
import ArticleButton from '../../utils/articleButton/ArticleButton';

const work =[
  {
    num: 1,
    name: "freelancing",
    link: "",
    startTime: "2021-11-1",
    endTime: ""
  },
  {
    num: 2,
    name: "teaching",
    link: "https://www.chitsazan.online",
    startTime: "2023-11-1",
    endTime: "2025-1-1"
  },
  // {
  //   num: 2,
  //   name: "iranfavagostaresh",
  //   link: "https://vmodel.app",
  //   startTime: "2022-12-1",
  //   endTime: "2023-08-1"
  // },
  {
    num: 3,
    name: "vmodel",
    link: "https://vmodel.app",
    startTime: "2022-08-1",
    endTime: "2022-11-1"
  },
  // {
  //   num: 2,
  //   name: "clickhub",
  //   link: "https://clickhub.ir"
  // },
]

const education =[
  {
    num: 1,
    name: "univercity",
    // link: "https://shirazu.ac.ir",
    link: "https://taap.cfu.ac.ir",
    file: ""
  },
  {
    num: 2,
    name: "english",
    link: "",
    file: english,
  },
  {
    num: 3,
    name: "kangaroo",
    link: "https://www.mathkangaroo.in",
    file: kangaroo,
  },
]

const article =[
  {
    num: 1,
    name: "One_ComparativeStudy_MathEducation_Iran_Japan",
    year: 2024,
    link: "https://www.confn.ir",
    indexing: "ISC",
    file: ""
  },
  {
    num: 3,
    name: "Three_AI_Personalized_Learning_Underrepresented_Student_Groups_Impact_Analysis",
    year: 2024,
    link: "https://icpe.bcnf.ir/",
    indexing: "ISI",
    file: kangaroo,
  },
  {
    num: 2,
    name: "Two_AI_Collaborative_Tool_Teacher_Student_Interactions",
    year: 2024,
    link: "https://www.icpse.ir",
    indexing: "ISC",
    file: english,
  },
  {
    num: 4,
    name: "Four_ECE_Neural_Plasticity_Neuroscience_Education_Perspective",
    year: 2024,
    link: "https://www.confn.ir",
    indexing: "ISC",
    file: kangaroo,
  },
]

// const articles = [
//   {
//     num: 1, // Article number or order
//     title: "Article Title", // Title of the article
//     publication: "Journal Name", // Name of the journal or publication
//     year: 2023, // Year of publication
//     link: "https://example.com", // Link to the article (if available online)
//     file: "path/to/article.pdf", // Local file or download path (if applicable)
//     abstract: "Short abstract or summary of the article", // Optional
//   },
// ];


const Work = () => {

    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
    // const isEn = bodyDir == "ltr" ? true : false
  
    const { t } = useTranslation()
  
    const check = localStorage.getItem("i18nextLng");

    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [check])
    // }, [localStorage.getItem("i18nextLng")])

    // month difference calculator
    const monthDiff = (startDate: Date, endDate: Date = new Date()) => {
        const year = endDate.getFullYear() - startDate.getFullYear();
        const month = endDate.getMonth() - startDate.getMonth();
        const finalYear = month < 0 ? year - 1 : year
        const finalMonth = month < 0 ? month + 13 : month + 1;
        return `${finalYear > 0 ? `${finalYear > 1 ? `${finalYear} ${t("time.years")}` : `${finalYear} ${t("time.year")}`}` : '' } ${finalMonth > 0 ? `${finalMonth > 1 ? `${finalMonth} ${t("time.months")}` : `${finalMonth} ${t("time.month")}`}` : '' }`
    }

    return (
      <div className='work-container' lang={language}>
        <div className='work-sections'>

          <div className='work-section'>
            <h1 className='work-title'><BusinessCenterIcon />{t("work.title")}</h1>

            {work.map((item, index) => (
              <div className='work-item reveal' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{index+1}</span>
                </div>
                <div className='item-data'> 
                  <h2>{t(`work.${item.name}-title`)}</h2>
                  { item.link ? <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`work.${item.name}-place`)}</h3></a>  : null }
                  { item.link ? <h5>{t(`work.${item.name}-place-describe`)}</h5> : null }
                  <h6>
                    {t(`work.${item.name}-time`)} . {item.endTime ? monthDiff(new Date(item.startTime), new Date(item.endTime)) : monthDiff(new Date(item.startTime))}
                    <br /> 
                    {item.link ? t(`work.${item.name}-workplace`) : null }
                  </h6>
                  <ul>
                    <li>{t(`work.${item.name}-about1`)}</li>
                    <li>{t(`work.${item.name}-about2`)}</li>
                    <li>{t(`work.${item.name}-about3`)}</li>
                    <li>{t(`work.${item.name}-about4`)}</li>
                  </ul>
                </div>
              </div>
            ))}
            
          </div>



          <div className='work-section border'>


            <h1 className='work-title'><SchoolIcon />{t("education.title")}</h1>

            {education.map((item, index) => (
              <div className='work-item reveal' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{index+1}</span>
                  {item.file ? <DocButton image={item.file} /> : null}
                </div>              
                <div className='item-data'> 
                  <h2>{t(`education.${item.name}-title`)}</h2>
                  <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`education.${item.name}-place`)}</h3></a>
                  <h6>{t(`education.${item.name}-time`)} <br /> {t(`education.${item.name}-workplace`)}</h6>
                  <p>{t(`education.${item.name}-about`)}</p>
                </div>
              </div>
            ))}


            <h1 className='work-title article-title'><DescriptionIcon />{t("article.title")}</h1>

            {article.map((item, index) => (
              <div className='work-item reveal article-item' key={item.name}>
                <div className='item-helper'>
                  <span className='num'>{index+1}</span>
                  <ArticleButton key={item.name} image={item.file} />
                </div>              
                <div className='item-data'> 
                  <h2>{t(`article.${item.name}-title`)}</h2>
                  <a href={item.link} target="_blank" rel="noreferrer"><h3>{t(`article.${item.name}-publication`)}</h3></a>
                  <h6>{item.year} - {t(`article.${item.name}-language`)}</h6>
                  <p>{t(`article.${item.name}-writers`)}</p>
                </div>
              </div>
            ))}


            
          </div>

        </div>
      </div>
    );
}

export default Work
