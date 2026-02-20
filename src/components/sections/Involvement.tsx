import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import "./Involvement.css";

export default function Involvement() {
  const { t } = useLanguage();

  return (
    <section className="involvement section" id="involvement">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.involvement.title}
        </motion.h2>

        <div className="involvement-timeline">
          {t.involvement.items.map((item, i) => (
            <motion.div
              key={i}
              className="involvement-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="involvement-dot">
                <FaUsers />
              </div>
              <div className="involvement-card">
                <div className="involvement-header">
                  <h3>{item.role}</h3>
                  <span className="involvement-org">{item.organization}</span>
                </div>
                <div className="involvement-meta">
                  <span>{item.period}</span>
                  <span>
                    <FaMapMarkerAlt size={12} /> {item.location}
                  </span>
                </div>
                <ul className="involvement-list">
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
