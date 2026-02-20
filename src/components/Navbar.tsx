import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const languages = [
  { code: "en" as const, flag: "🇬🇧", label: "English" },
  { code: "fr" as const, flag: "🇫🇷", label: "Français" },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language)!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          TM<span className="accent">.</span>
        </a>

        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClick}>
              {link.label}
            </a>
          ))}

          <div className="lang-select" ref={langRef}>
            <button
              className="lang-select-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
            >
              <span className="lang-flag">{current.flag}</span>
              <span className="lang-code">{current.code.toUpperCase()}</span>
              <FaChevronDown className={`lang-chevron${langOpen ? " open" : ""}`} />
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option${lang.code === language ? " active" : ""}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
    </nav>
  );
}
