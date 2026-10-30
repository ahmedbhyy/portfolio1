import { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";
import { skillgroups, spokenlanguages } from "./skills";

const VISIBLE_COUNT = 6;

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleGroups = showAll ? skillgroups : skillgroups.slice(0, VISIBLE_COUNT);

  return (
    <section className="skills" id="skills">
      <span className="section-eyebrow">Toolbox</span>
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
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        Skills
      </h1>
      <p className="subtitle">Technologies I use to design, train and ship products</p>

      <div className="skill-grid">
        {visibleGroups.map((group, index) => (
          <motion.div
            key={group.category}
            className="panel-card skill-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h2 className="skill-category">{group.category}</h2>
            <div className="tag-group">
              {group.items.map((item) => (
                <span className="tag-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {skillgroups.length > VISIBLE_COUNT && (
        <button
          className="show-all-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show less" : `Show all ${skillgroups.length} skill groups`}
          <span
            className="icon-keyboard_arrow_up"
            style={{ rotate: showAll ? "0deg" : "180deg" }}
          ></span>
        </button>
      )}

      <div className="languages-row">
        <h2 className="skill-category">Spoken languages</h2>
        <div className="tag-group">
          {spokenlanguages.map((lang) => (
            <span className="tag-chip lang-chip" key={lang.name}>
              {lang.name} <span className="lang-level">· {lang.level}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
