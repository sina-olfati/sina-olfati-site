import React, { useEffect, useState } from "react";
import "./Contact.css";

// Components
import EmailMe from "../components/contact/EmailMe";

// Icons
import EmailIcon from "@mui/icons-material/Email";
// import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
// import InsightsIcon from "@mui/icons-material/Insights";

// Reveal Animation
import "../assets/css/reveal.css";

// i18next
// import { useTranslation } from "react-i18next";

const Contact = () => {
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  // console.log("contact: ", language);
  // const isEn = bodyDir == "ltr" ? true : false

  // const { t } = useTranslation();

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    // window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [check]);
  // }, [localStorage.getItem("i18nextLng")]);

  const data = [
    {
      name: "+98 994 166 9736",
      link: "tel:+989941669736",
      icon: <LocalPhoneIcon />,
    },
    {
      name: "sinaolfati6@gmail.com",
      link: "mailto:sinaolfati6@gmail.com",
      icon: <EmailIcon />,
    },
    {
      name: "sina-olfati",
      link: "https://github.com/sina-olfati",
      icon: <GitHubIcon />,
    },
    {
      name: "sina-olfati-872950233",
      link: "https://www.linkedin.com/in/sina-olfati-872950233",
      icon: <LinkedInIcon />,
    },
    {
      name: "+989941669736",
      link: "https://wa.me/+989941669736",
      icon: <WhatsAppIcon />,
    },
    {
      name: "@sinaolfati",
      link: "https://telegram.me/sinaolfati",
      icon: <TelegramIcon />,
    },
    // {name: "sina_._olfati", link: "https://www.instagram.com/sina_._olfati", icon: <InstagramIcon />},
  ];

  return (
    // <div  >
    <div id="contact" className="contact-container" lang={language}>
      <div className="social-links">
        <div className="links-container">
          <ul>
            {data.map((item) => (
              <li className="reveal" key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                  <span dir="ltr">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-container">
          <EmailMe />
        </div>
      </div>
      {/* 
                  <img src={links} alt="Boy sitting on Laptop and aLink" /> 
                  <img src={email} alt="Guy recieving Emials" />
                  <img src={idea} alt="Boy having new Ideas" /> 
                */}
      {/* <div className="the-end">
        <InsightsIcon />
        <h1>{t("contact.update")}</h1>
      </div> */}
    </div>
    // </div>
  );
};

export default Contact;
