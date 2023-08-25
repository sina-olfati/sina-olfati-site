import React, { useEffect, useState } from "react";
import "./Portfolio.css";

// utils
import Title from "../utils/title/Title";
import MTButton from "../utils/MTButton/MTButton";

// images
import carRental from "../assets/images/portfolio/car-rental.png";
import gymate from "../assets/images/portfolio/gymate.png";
import modernECommerce from "../assets/images/portfolio/modern-e-commerce.png";
import aryana from "../assets/images/portfolio/aryana.png";
import luckyDuck from "../assets/images/portfolio/luckyDuck.png";
import neoki from "../assets/images/portfolio/neoki.png";
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
    link: "https://car-rental-sina.vercel.app",
  },
  {
    name: "gymate",
    pic: gymate,
    link: "https://gymate-sina.vercel.app/",
  },
  {
    name: "ecommerce",
    pic: modernECommerce,
    link: "https://modern-e-commerce-sina.vercel.app/",
  },
  {
    name: "aryana",
    pic: aryana,
    link: "https://ariyana-shariflo.vercel.app",
  },
  {
    name: "neoki",
    pic: neoki,
    link: "https://neoki-nft.vercel.app",
  },
  {
    name: "luckyDuck",
    pic: luckyDuck,
    link: "https://sina-pools.vercel.app/pools",
  },
  // {
  //   name: "caribCoin",
  //   pic: caribCoin,
  //   link: "https://caribbean-coin.vercel.app/presale",
  // },
  // {
  //   name: "resumeTemplate",
  //   pic: resumeTemplate,
  //   link: "https://resume-sina-olfati.vercel.app",
  // },
  // {
  //   name: "mySite",
  //   pic: mySite,
  //   link: "https://sina-olfati.github.io/sina-olfati-site",
  // },
  // {
  //   name: "digitex",
  //   pic: digitex,
  //   link: "https://digix.vercel.app",
  // },
  // {
  //   name: "myShop",
  //   pic: myShop,
  //   link: "/sina-olfati-site/products",
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
      <Title title="portfolio-portfolio" />

      <div className="port-cards" lang={language}>
        {items.map((item): any => (
          <div className="card reveal" key={item.name}>
            <div className="card-picture" style={{ backgroundImage: `url(${item.pic})` }}>
              {/* <p>{t(`portfolio-${item.name}-name`)}</p> */}
              {/* <img src={item.pic} alt="Sinas Site" /> */}
            </div>

            <div className="card-text">
              <div className="description">
                <h1>{t(`portfolio-${item.name}-name`)}</h1>
                <h2>{t(`portfolio-${item.name}-description`)}</h2>
              </div>

              <div className="bottom-description">
                <h3>{t(`portfolio-${item.name}-technologies`)}</h3>
                <div className="visit-button">
                  <MTButton text={"portfolio-visit"} href={item.link} download="" icon1={<OpenInNewIcon />} icon2={<RemoveRedEyeIcon />} />
                  <span className="padding"></span>
                  <MTButton text={"github"} href={item.link} download="" icon1={<OpenInNewIcon />} icon2={<GitHubIcon />} />
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
