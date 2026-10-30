import { motion } from "framer-motion";
import "./experience.css";
import { experiencelist } from "./experience";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <span className="section-eyebrow">Career</span>
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
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
        Experience
      </h1>
      <p className="subtitle">Internships, freelance work and hands-on engineering</p>

      <div className="timeline">
        {experiencelist.map((item, index) => (
          <motion.div
            key={item.company}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {index !== experiencelist.length - 1 && (
                <span className="timeline-line" />
              )}
            </div>
            <div className="panel-card timeline-card">
              <div className="flex timeline-head">
                <div>
                  <h2 className="role">{item.role}</h2>
                  {item.companyLink ? (
                    <a
                      className="company"
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                      <span className="icon-link" />
                    </a>
                  ) : (
                    <p className="company">{item.company}</p>
                  )}
                </div>
                <span className="period">{item.period}</span>
              </div>
              <ul className="points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
