import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiMongodb,
  SiGit, SiGithub, SiDocker, SiLinux, SiVercel, SiFigma,
  SiUnity, SiSharp, SiPython, SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Skills.css";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  key: "frontend" | "backend" | "tools" | "other";
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PHP", icon: <SiPhp /> },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
  {
    key: "other",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <SiSharp /> },
      { name: "Unity", icon: <SiUnity /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </motion.h2>

        <div className="skills-categories">
          {skillData.map((category, ci) => (
            <motion.div
              key={category.key}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="skill-category-title">
                {t.skills.categories[category.key]}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
