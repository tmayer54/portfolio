import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./Languages.css";

const flags: Record<string, string> = {
  French: "\uD83C\uDDEB\uD83C\uDDF7",
  Français: "\uD83C\uDDEB\uD83C\uDDF7",
  English: "\uD83C\uDDEC\uD83C\uDDE7",
  Anglais: "\uD83C\uDDEC\uD83C\uDDE7",
  German: "\uD83C\uDDE9\uD83C\uDDEA",
  Allemand: "\uD83C\uDDE9\uD83C\uDDEA",
};

export default function Languages() {
  const { t } = useLanguage();

  return (
    <section className="languages section" id="languages">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.languages.title}
        </motion.h2>

        <div className="languages-grid">
          {t.languages.items.map((item, i) => (
            <motion.div
              key={item.language}
              className="language-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="language-flag">{flags[item.language] || ""}</div>
              <div className="language-name">{item.language}</div>
              <div className="language-level">{item.level}</div>
              {item.detail && <div className="language-detail">{item.detail}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
