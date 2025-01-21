import React, { useEffect, useState } from "react";
import "./Home.css";

// components
import Menu from "../utils/menu/Menu";
import Front from "../components/home/Front";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import UpButton from "../utils/upButton/UpButton";

// i18next
// import { useTranslation } from "react-i18next";

// Reveal
import reveal from '../assets/js/reveal';
import '../assets/css/reveal.css'
window.addEventListener('scroll', reveal)


const Home = ({ theme }: any) => {
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  // const isEn = bodyDir == "ltr" ? true : false

  // const { t } = useTranslation();

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    // window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [check]);
  // }, [localStorage.getItem("i18nextLng")]);

  return (
    <div id="home" className="home-container2" lang={language}>
      <Menu page="nothing" theme={theme} />
      <UpButton />
      
      {/* <Front /> */}
      {/* <Resume /> */}
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
