import { motion } from "framer-motion";
import "./awards.css";
import { awardslist, leadershiplist } from "./awards";

export default function Awards() {
  return (
    <section className="awards" id="awards">
      <span className="section-eyebrow">Recognition</span>
      <h1 className="title section-title">
        <svg
          className="svgicon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M8.2 12.6 7 22l5-3 5 3-1.2-9.4" />
        </svg>
        Awards &amp; Achievements
      </h1>
      <p className="subtitle">Hackathon podiums and leadership on campus</p>

      <div className="award-grid">
        {awardslist.map((item, index) => (
          <motion.div
            key={item.title}
            className="panel-card award-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <span className="place-chip">{item.place}</span>
            <h2 className="award-title">{item.title}</h2>
            <p className="award-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="leadership-row">
        <h2 className="skill-category">Club activities</h2>
        <div className="leadership-grid">
          {leadershiplist.map((item) => (
            <div className="leadership-item" key={item.role}>
              <p className="leadership-role">
                {item.role} <span className="leadership-org">· {item.org}</span>
              </p>
              <p className="leadership-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
