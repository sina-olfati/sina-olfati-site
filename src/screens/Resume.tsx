import React, { useEffect } from "react";
import "./Resume.css";

// Components
import About from "../components/resume/About";
import Describe from "../components/resume/Describe";
import Skills from "../components/resume/skills/Skills";
import Work from "../components/resume/Work";
import Langs from "../components/resume/Langs";

const Resume = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div id="resume" className="resume-container">
      <div className="resume-all-others">
        {/* <Describe /> */}
        
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Work /> */}
        <Langs />
      </div>
    </div>
  );
};

export default Resume;
