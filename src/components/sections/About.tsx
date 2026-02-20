import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCar } from "react-icons/fa";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: <FaMapMarkerAlt />, text: t.about.location },
    { icon: <FaEnvelope />, text: t.about.email },
    { icon: <FaPhone />, text: t.about.phone },
    { icon: <FaCar />, text: t.about.license },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>{t.about.description}</p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {infoItems.map((item, i) => (
              <div key={i} className="about-info-item">
                <span className="about-info-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
