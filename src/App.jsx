import HERO from "./components/2-hero/hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contactus from "./components/4-contact/contact";
import Education from "./components/5-education/education.jsx";

import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setshowscrollBTN(true);
      } else {
        setshowscrollBTN(false);
      }
    });
  }, []);
  const [showscrollBTN, setshowscrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <HERO />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Contactus />
      <div className="divider" />
      <Footer />
      <a
        style={{ opacity: showscrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>
    </div>
  );
}

export default App;
