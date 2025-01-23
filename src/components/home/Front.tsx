import React, { useEffect, useState } from "react";
import "./Front.css";
// @ts-ignore
import SinaOlfatiResume from "../../assets/cv/Sina Olfati Resume.pdf";

// pictures
// import Me from "../../assets/images/me/me.webp";
import Me from "../../assets/images/me/me4.png";

// utils
import MTButton from "../../utils/MTButton/MTButton";

// MUi
import { Button } from "@mui/material";

// icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// i18next
import { useTranslation } from "react-i18next";

const Front = () => {
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation();

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    // window.scrollTo(0, 0);
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [check]);
  // }, [localStorage.getItem("i18nextLng")]);

  // installing PWA
  // let deferredPrompt: any;
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //       deferredPrompt = e;
  //   });

  //   const installApp = document.getElementById('installApp');
  //   installApp.addEventListener('click', async () => {
  //       if (deferredPrompt !== null) {
  //           deferredPrompt.prompt();
  //           const { outcome } = await deferredPrompt.userChoice;
  //           if (outcome === 'accepted') {
  //               deferredPrompt = null;
  //           }
  //       }
  //   });

  return (
    <div className="front-container" lang={language}>
      {/* <Menu /> */}
      {/* data in the center */}
      <div className="data">
        {/* links */}
        <div className="fast-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/sina-olfati-872950233"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <LinkedInIcon />
                </Button>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sina-olfati"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <GitHubIcon />
                </Button>
              </a>
            </li>
            <li>
              <a
                href="mailto:sinaolfati6@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <EmailIcon />
                </Button>
              </a>
            </li>
          </ul>
        </div>

        {/* texts */}
        <div className="texts">
          <h1>{t("front.im")}</h1>
          {/* <h1><h2>Hi, I'm </h2>Sina Olfati</h1> */}
          {/* <h1>سلام، من سینا الفتی‌ام</h1> */}
          <h3>{t("front.job1")}</h3>
          <h3>{t("front.job2")}</h3>
          <p>{t("front.description")}</p>

          <div className="cv-button">
            <MTButton  text={"cv"}  href={SinaOlfatiResume}  download={SinaOlfatiResume}  icon1={<FileDownloadIcon />}  icon2={<DescriptionIcon />}/>
          </div>
        </div>
        {/* image */}
        <div className="image-container">
          <div className="darkener"></div>
          <img src={Me} alt="me sina olfati" />
        </div>
      </div>

      <a href="#resume" className="scroll-a">
        <div className="scroll">
          {/* <h2>{t("home_scroll")}</h2> */}
          <div className="arrows">
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Front;
