import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developeranimation from "../../../src/animation/developer.json";
import { motion } from "framer-motion";

export default function HERO() {
  const lottieref = useRef();
  return (
    <section className="hero flex" id="about">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 50 }}
            src="./ahmed.JPEG"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          ICT Engineering Student
        </motion.h1>
        <p className="subtitle">
          I'm Ahmed Bel haj yahia, an ICT engineering student enthusiast about
          Mobile development && Web development, that’s why as soon as I got
          into engineering school, I found myself quickly attracted to Mobile
          Development.
        </p>
        <div className="all-icons flex">
          <a
            className="icon icon-github"
            href="https://github.com/ahmedbhyy"
          ></a>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/ahmed-ben-haj-yahia/"
          ></a>
          <a
            className="icon icon-facebook"
            href="https://www.facebook.com/ahmed.belhajyahia/"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/ahmedbelhajyahia/"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieref}
          onLoadedImages={() => {
            // @ts-ignore
            lottieref.current.setSpeed(0.5);
          }}
          className="animationdev"
          style={{ height: "500px" }}
          animationData={developeranimation}
        />
      </div>
    </section>
  );
}
