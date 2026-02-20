import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.education.title}
        </motion.h2>

        <div className="education-grid">
          {t.education.items.map((item, i) => (
            <motion.div
              key={i}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-period">{item.period}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
