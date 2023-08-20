import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

// images
import mySite from "../assets/images/mySite.png";
import myShop from "../assets/images/myShop.png";
import resumeTemplate from "../assets/images/resumeTemplate.png";
import aryana from "../assets/images/aryana.png";
import luckyDuck from "../assets/images/luckyDuck.png";
import digitex from "../assets/images/digitex.png";
import caribCoin from "../assets/images/caribCoin.png";
import neoki from "../assets/images/neoki.png";

// Components
import Menu from "../components/menu/OldMenu";
import { t } from "i18next";

// i18next
import { useTranslation } from "react-i18next";

const items = [
  {
    num: "mySite",
    pic: mySite,
    link: "https://sina-olfati.github.io/sina-olfati-site",
  },
  {
    num: "caribCoin",
    pic: caribCoin,
    link: "https://caribbean-coin.vercel.app/presale",
  },
  {
    num: "neoki",
    pic: neoki,
    link: "https://neoki-nft.vercel.app",
  },
  {
    num: "luckyDuck",
    pic: luckyDuck,
    link: "https://sina-pools.vercel.app/pools",
  },
  {
    num: "digitex",
    pic: digitex,
    link: "https://digix.vercel.app",
  },
  {
    num: "aryana",
    pic: aryana,
    link: "https://ariyana-shariflo.vercel.app/",
  },
  {
    num: "resumeTemplate",
    pic: resumeTemplate,
    link: "https://resume-sina-olfati.vercel.app",
  },
  {
    num: "myShop",
    pic: myShop,
    link: "/sina-olfati-site/products",
  },
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

      <h1 lang={language} className="title">{t("resume-skills")}</h1>

      <div className="port-cards" lang={language}>

        {items.map((item): any => (
          <div className="card" key={item.num}>
            <div className="card-picture" style={{backgroundImage: `url(${item.pic})`}}>
              {/* <p>{t(`portfolio-${item.num}-name`)}</p> */}
              {/* <img src={item.pic} alt="Sinas Site" /> */}
            </div>
            <div className="card-text">
              <div className="description">
                <h1>{t(`portfolio-${item.num}-name`)}</h1>
                <h2>{t(`portfolio-${item.num}-description`)}</h2>
                <h3>{t(`portfolio-${item.num}-technologies`)}</h3>
              </div>
              <a className="visitButton" href={item.link}>
                {t("portfolio-visit")}
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;
