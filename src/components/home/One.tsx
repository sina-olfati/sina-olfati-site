import React from "react";
import "./One.css";

const One = () => {
  return (
  <body>
    <main>
      <section className="no-parallax">
        <h1>"Im a programmar to build user interfaces with React"</h1>
      </section>
      <section className="parallax bg">
        <h1>
          I am, <br />
          <span>SINA OLFATI</span>
        </h1>
      </section>
      <section className="no-parallax">
        <h1>Have a nice day!</h1>
      </section>
    </main>
  </body>
  );
};

export default One;
