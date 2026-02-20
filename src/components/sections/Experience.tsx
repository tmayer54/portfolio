import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.experience.title}
        </motion.h2>

        <div className="timeline">
          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>{item.role}</h3>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span>
                    <FaMapMarkerAlt size={12} /> {item.location}
                  </span>
                </div>
                <ul className="timeline-list">
                  {item.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
