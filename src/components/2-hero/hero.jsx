import { useRef } from "react";
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
          ICT Engineer
        </motion.h1>
        <p className="subtitle">
          I’m Ahmed Ben Haj Yahia, an ICT engineer from SUP’COM
          specializing in AI, data science, and intelligent systems. I build
          AI-powered applications, agentic systems, and full-stack products
          that solve real problems.
        </p>
        <div className="hero-stats flex">
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">Projects shipped</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Engineering internships</span>
          </div>
          <div className="stat">
            <span className="stat-value">5</span>
            <span className="stat-label">Hackathon podiums</span>
          </div>
        </div>
        <div className="all-icons flex">
          <a
            className="icon icon-github"
            href="https://github.com/ahmedbhyy"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/ahmed-ben-haj-yahia/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="icon icon-whatsapp"
            href="https://wa.me/33651470500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.46 3.482 1.334 4.997l-1.417 5.17 5.29-1.388a9.96 9.96 0 0 0 4.79 1.218h.004c5.514 0 9.997-4.483 9.997-9.997s-4.483-9.997-9.997-9.997zm0 18.168h-.003a8.15 8.15 0 0 1-4.153-1.137l-.298-.177-3.14.824.838-3.06-.194-.314a8.156 8.156 0 0 1-1.251-4.307c0-4.507 3.667-8.174 8.175-8.174 2.184 0 4.237.851 5.782 2.396a8.12 8.12 0 0 1 2.393 5.782c0 4.508-3.667 8.167-8.149 8.167z" />
            </svg>
          </a>
          <a
            className="cv-btn"
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
            CV
          </a>
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
          animationData={developeranimation}
        />
      </div>
    </section>
  );
}
