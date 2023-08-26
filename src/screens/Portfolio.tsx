import React, { useEffect, useState } from "react";
import "./Portfolio.css";

// utils
import Title from "../utils/title/Title";
import MTButton from "../utils/MTButton/MTButton";

// images
import carRental from "../assets/images/portfolio/car-rental.webp";
import gymate from "../assets/images/portfolio/gymate.webp";
import modernECommerce from "../assets/images/portfolio/modern-e-commerce.webp";
import lover from "../assets/images/portfolio/lover.webp";
import neoki from "../assets/images/portfolio/neoki.webp";
// import luckyDuck from "../assets/images/portfolio/luckyDuck.webp";
// import mySite from "../assets/images/portfolio/mySite.png";
// import myShop from "../assets/images/portfolio/myShop.png";
// import resumeTemplate from "../assets/images/portfolio/resumeTemplate.png";
// import digitex from "../assets/images/portfolio/digitex.png";
// import caribCoin from "../assets/images/portfolio/caribCoin.png";

// icons
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from '@mui/icons-material/GitHub';

// i18next
import { useTranslation } from "react-i18next";

// Reveal Animation
import "../assets/css/reveal.css";

const items = [
  {
    name: "car",
    pic: carRental,
    demo: "https://car-rental-sina.vercel.app",
    github: "https://github.com/sina-olfati/car-rental-project"
  },
  {
    name: "gymate",
    pic: gymate,
    demo: "https://gymate-sina.vercel.app/",
    github: "https://github.com/sina-olfati/gymate"
  },
  {
    name: "ecommerce",
    pic: modernECommerce,
    demo: "https://modern-e-commerce-sina.vercel.app/",
    github: "https://github.com/sina-olfati/modern-e-commerce"
  },
  {
    name: "lover",
    pic: lover,
    demo: "https://lover369.com",
    github: ""
  },
  {
    name: "neoki",
    pic: neoki,
    demo: "https://neoki-nft.vercel.app",
    github: ""
  },
  // {
  //   name: "luckyDuck",
  //   pic: luckyDuck,
  //   demo: "https://sina-pools.vercel.app/pools",
  //   github: "https://github.com/sina-olfati/lucky_duck_mine"
  // },
  // {
  //   name: "caribCoin",
  //   pic: caribCoin,
  //   demo: "https://caribbean-coin.vercel.app/presale",
  // },
  // {
  //   name: "resumeTemplate",
  //   pic: resumeTemplate,
  //   demo: "https://resume-sina-olfati.vercel.app",
  // },
  // {
  //   name: "mySite",
  //   pic: mySite,
  //   demo: "https://sina-olfati.github.io/sina-olfati-site",
  // },
  // {
  //   name: "digitex",
  //   pic: digitex,
  //   demo: "https://digix.vercel.app",
  // },
  // {
  //   name: "myShop",
  //   pic: myShop,
  //   demo: "/sina-olfati-site/products",
  // },
];

const Portfolio = () => {
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [localStorage.getItem("i18nextLng")]);

  return (
    <div id="portfolio" className="port-container">
      {/* <h1 lang={language} className="title">
        {t("resume-skills")}
      </h1> */}
      <Title title="portfolio" />

      <div className="port-cards" lang={language}>
        {items.map((item): any => (
          <div className="card reveal" key={item.name}>
            <div className="card-picture" style={{ backgroundImage: `url(${item.pic})` }}>
              {/* <p>{t(`portfolio.${item.name}-name`)}</p> */}
              {/* <img src={item.pic} alt="Sinas Site" /> */}
            </div>

            <div className="card-text">
              <div className="description">
                <h1>{t(`portfolio.${item.name}-name`)}</h1>
                <h2>{t(`portfolio.${item.name}-description`)}</h2>
              </div>

              <div className="bottom-description">
                <h3>{t(`portfolio.${item.name}-technologies`)}</h3>
                <div className="visit-button">
                  <MTButton text={"visit"} href={item.demo} download="" icon1={<OpenInNewIcon />} icon2={<RemoveRedEyeIcon />} />
                  {item.github ? <span className="padding"></span> : null }
                  {item.github ? <MTButton text={"github"} href={item.github} download="" icon1={<OpenInNewIcon />} icon2={<GitHubIcon />} /> : null }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
