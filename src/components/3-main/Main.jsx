import React, { useState } from "react";
import "./main.css";
import { myprojects } from "./myprojects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myprojects);

  const handleclick = (buttoncategory) => {
    setcurrentActive(buttoncategory);
    const newwarray = myprojects.filter((item) => {
      const secondarray = item.category.filter((myitem) => {
        return myitem === buttoncategory;
      });
      return secondarray[0] === buttoncategory;
    });
    setarr(newwarray);
  };
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
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
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgpath}
                className="card"
              >
                <img width={270} src={item.imgpath} alt="" />
                <div style={{ width: "270px" }} className="box">
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
      </section>
    </main>
  );
}
