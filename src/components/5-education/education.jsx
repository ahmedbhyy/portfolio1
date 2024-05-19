import React, { useState } from "react";
import "./education.css";
import { AnimatePresence, motion } from "framer-motion";
import { educationlist } from "./education";
import Lottie from "lottie-react";
import educationanimation from "../../../src/animation/education.json";

export default function Education() {
  return (
    <main className="flex" id="education">
      <section className="left-section-education">
        <h1 className="title">
          <span className="icon-education"></span>Education
        </h1>
        <p className="subtitle">My Academic Journey and Achievements</p>
        <div className="animation">
          
          <Lottie
            style={{ height: "200px" }}
            animationData={educationanimation}
          />
        </div>
      </section>
      <section className="flex right-section-education">
        <AnimatePresence>
          {educationlist.map((item) => {
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
                  <h1 className="title">{item.title}</h1>
                  <p className="subtitle">{item.subtitle}</p>
                  <div className="flex icons">
                    <a className="icon-link" href={item.link}></a>
                    <a className="link flex" href={item.link}>
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
