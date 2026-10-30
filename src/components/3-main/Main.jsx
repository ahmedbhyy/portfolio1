import { useState } from "react";
import "./main.css";
import { myprojects } from "./myprojects";
import { AnimatePresence, motion } from "framer-motion";

const VISIBLE_COUNT = 6;

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myprojects);
  const [showAll, setShowAll] = useState(false);

  const handleclick = (buttoncategory) => {
    setcurrentActive(buttoncategory);
    setShowAll(false);
    const newwarray = myprojects.filter((item) => {
      const secondarray = item.category.filter((myitem) => {
        return myitem === buttoncategory;
      });
      return secondarray[0] === buttoncategory;
    });
    setarr(newwarray);
  };

  const visibleProjects = showAll ? arr : arr.slice(0, VISIBLE_COUNT);
  return (
    <main className="flex">
      <section className="flex left-section" id="projects">
        <button
          onClick={() => {
            setcurrentActive("all");
            setShowAll(false);
            setarr(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleclick("flutter");
          }}
          className={currentActive === "flutter" ? "active" : null}
        >
          Flutter
        </button>
        <button
          onClick={() => {
            handleclick("AI");
          }}
          className={currentActive === "AI" ? "active" : null}
        >
          AI
        </button>
        <button
          onClick={() => {
            handleclick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => {
            handleclick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react
        </button>
      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {visibleProjects.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgpath}
                className="card"
              >
                <img src={item.imgpath} alt="" />
                <div className="box">
                  <h1 className="title">{item.projecttitle}</h1>
                  <p className="subtitle">{item.desc}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a className="icon-link" href={item.link}></a>
                      <a className="icon-github" href={item.github}></a>
                    </div>
                    <a className="link flex" href={item.github}>
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right2"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
        {arr.length > VISIBLE_COUNT && (
          <button
            className="show-all-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show less" : `Show all ${arr.length} projects`}
            <span
              className="icon-keyboard_arrow_up"
              style={{ rotate: showAll ? "0deg" : "180deg" }}
            ></span>
          </button>
        )}
      </section>
    </main>
  );
}
