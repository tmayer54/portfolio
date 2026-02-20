const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Thibault Mayer",
    title: "Full-Stack Developer",
    subtitle:
      "Passionate about creating modern web experiences and interactive applications",
    cta: "View My Work",
    contact: "Get In Touch",
  },
  about: {
    title: "About Me",
    description:
      "I'm a full-stack developer with a strong passion for modern web technologies. Graduated with an Engineering degree in Computer Science from UTBM, I combine solid academic knowledge with hands-on project experience. I've built production websites, contributed to blockchain projects, and developed game server plugins — always eager to learn and take on new challenges.",
    location: "Malleloy, France",
    email: "thibault.mayer54@gmail.com",
    phone: "+33 6 51 51 94 82",
    license: "Driver's License B",
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Full-Stack Developer",
        company: "The Spider",
        period: "Feb 2025 – Present",
        location: "San Francisco, USA",
        description: [
          "Developed and maintained full-stack web applications",
          "Collaborated with an international team in a fast-paced environment",
          "Built responsive and performant UIs with modern frameworks",
        ],
      },
      {
        role: "Assistant Engineer — Internship",
        company: "GeoRessources",
        period: "Sept 2023 – Feb 2024",
        location: "Nancy, France",
        description: [
          "Developed internal tools and applications for the research laboratory",
          "Worked on data processing and visualization solutions",
          "Collaborated with researchers on technical requirements",
        ],
      },
      {
        role: "Student Association President",
        company: "UTBM",
        period: "Feb 2022 – Sept 2023",
        location: "Belfort, France",
        description: [
          "Led and managed a student association at the university",
          "Organized events and coordinated team activities",
          "Developed leadership and project management skills",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    viewSite: "Visit Site",
    viewCode: "View Code",
    viewMore: "Learn More",
    items: [
      {
        title: "Synoligo.com",
        category: "Web Development",
        description:
          "Corporate website built from scratch for a biotech company. Features server-side rendering, SEO optimization, and a clean modern design that highlights the company's services.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
        link: "https://synoligo.com",
        type: "web" as const,
      },
      {
        title: "BonkCoin.com",
        category: "Web3 / Crypto",
        description:
          "Official website for the BONK cryptocurrency. Responsive landing page with Web3 integrations, token information display, and interactive elements for the crypto community.",
        tags: ["React", "Web3", "JavaScript", "CSS"],
        link: "https://bonkcoin.com",
        type: "web" as const,
      },
      {
        title: "Minecraft Server Plugins",
        category: "Game Development",
        description:
          "Custom Minecraft server plugins built with Java. Features include custom game mechanics, player management systems, and server-side event handling for enhanced multiplayer experiences.",
        tags: ["Java", "Spigot API", "MySQL", "Game Design"],
        type: "game" as const,
      },
      {
        title: "Video Game Projects",
        category: "Game Development",
        description:
          "Interactive game projects developed using Unity engine. Includes gameplay mechanics, physics systems, and UI design for engaging player experiences.",
        tags: ["Unity", "C#", "Game Design", "3D/2D"],
        type: "game" as const,
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      tools: "Tools & DevOps",
      other: "Other",
    },
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Engineering Degree in Computer Science",
        school: "University of Technology of Belfort-Montbéliard (UTBM)",
        period: "2020 – 2025",
        description:
          "Relevant coursework in Structural Design and Project Management",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle:
      "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    emailBtn: "Say Hello",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSend: "Send Message",
  },
  footer: {
    designed: "Designed & Built by Thibault Mayer",
    rights: "All rights reserved.",
  },
};

export default en;
