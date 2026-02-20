import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-socials">
          <a href="mailto:thibault.mayer54@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/tmayer54" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/thibault-mayer-5b6b12330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-text">
          {t.footer.designed}
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Thibault Mayer. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
