import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaExternalLinkAlt, FaGamepad, FaGlobe, FaImages } from "react-icons/fa";
import "./Projects.css";

import synoligoImg from "../../assets/images/projects/Synoligo.png";
import bonkImg from "../../assets/images/projects/Bonk.png";
import pluginImg from "../../assets/images/projects/Plugin.png";
import mobileGameImg from "../../assets/images/projects/MobileGame.png";

type ProjectFilter = "all" | "web" | "game";

const projectImages: Record<string, string> = {
  "Synoligo.com": synoligoImg,
  "BonkCoin.com": bonkImg,
  "Minecraft Server Plugins": pluginImg,
  "Plugins Serveur Minecraft": pluginImg,
  "Video Game Projects": mobileGameImg,
  "Projets Jeux Vidéo": mobileGameImg,
};

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered =
    filter === "all"
      ? t.projects.items
      : t.projects.items.filter((p) => p.type === filter);

  const filters: { key: ProjectFilter; label: string; icon: React.ReactNode }[] = [
    { key: "all", label: "All", icon: null },
    { key: "web", label: "Web", icon: <FaGlobe /> },
    { key: "game", label: "Games", icon: <FaGamepad /> },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>

        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const image = projectImages[project.title];
              return (
                <motion.div
                  key={project.title}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="project-preview"
                    onClick={() => image && setLightbox({ src: image, alt: project.title })}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={project.title}
                        className="project-cover"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <FaImages size={32} />
                        <span>{project.category}</span>
                      </div>
                    )}
                  </div>

                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt size={12} /> {t.projects.viewSite}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
