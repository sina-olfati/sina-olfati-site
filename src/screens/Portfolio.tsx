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
    window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [localStorage.getItem("i18nextLng")]);

  return (
    <div id="portfolio" className="port-container">
      <div className="port-cards" lang={language}>
        {items.map((item): any => (
          <div className="card">
            <div className="card-picture">
              <p>{t(`portfolio-${item.num}-name`)}</p>
              <img src={item.pic} alt="Sinas Site" />
            </div>
            <div className="card-text">
              <h1>{t(`portfolio-${item.num}-name`)}</h1>
              <h2>{t(`portfolio-${item.num}-description`)}</h2>
              <h3>{t(`portfolio-${item.num}-technologies`)}</h3>
              <a className="visitButton" href={item.link}>
                {t("portfolio-visit")}
              </a>
            </div>
          </div>
        ))}

        {/* First card */}
        {/* <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-one-name")}</p>
              <img src={ mySite } alt='Sinas Site'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-one-name")}</h1>
              <h2>{t("portfolio-one-description")}</h2>
              <h3>{t("portfolio-one-technologies")}</h3>         
            </div>
          </div> */}

        {/* Second card */}
        {/* <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-two-name")}</p>
              <img src={ myShop } alt='Sinas Shop'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-two-name")}</h1>
              <h2>{t("portfolio-two-description")}</h2>
              <h3>{t("portfolio-two-technologies")}</h3>
              <Link className="visitButton" to='/sina-olfati-site/products'>{t("portfolio-visit")}</Link>
            </div>
          </div> */}

        {/* Third card */}
        {/* <div className='card'>
            <div className='card-picture'>
              <p>{t("portfolio-three-name")}</p>
              <img src={ resumeTemplate } alt='Sinas Resume Template'/>
            </div>
            <div className='card-text'>
              <h1>{t("portfolio-three-name")}</h1>
              <h2>{t("portfolio-three-description")}</h2>
              <h3>{t("portfolio-three-technologies")}</h3>
              <a className="visitButton" href='https://resume-sina-olfati.vercel.app'>{t("portfolio-visit")}</a>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
