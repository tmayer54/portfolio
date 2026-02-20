const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "Thibault Mayer",
    title: "Développeur Full-Stack",
    subtitle:
      "Passionné par la création d'expériences web modernes et d'applications interactives",
    cta: "Voir mes projets",
    contact: "Me contacter",
  },
  about: {
    title: "À propos de moi",
    description:
      "Je suis un développeur full-stack passionné par les technologies web modernes. Diplômé ingénieur en informatique de l'UTBM, je combine des connaissances académiques solides avec une expérience pratique sur des projets concrets. J'ai construit des sites en production, contribué à des projets blockchain et développé des plugins de serveurs de jeux — toujours prêt à apprendre et relever de nouveaux défis.",
    location: "Malleloy, France",
    email: "thibault.mayer54@gmail.com",
    phone: "+33 6 51 51 94 82",
    license: "Permis B",
  },
  experience: {
    title: "Expérience",
    items: [
      {
        role: "Développeur Full-Stack",
        company: "The Spider",
        period: "Fév 2025 – Présent",
        location: "San Francisco, USA",
        description: [
          "Développement et maintenance d'applications web full-stack",
          "Collaboration avec une équipe internationale dans un environnement dynamique",
          "Création d'interfaces responsives et performantes avec des frameworks modernes",
        ],
      },
      {
        role: "Stage Assistant Ingénieur",
        company: "GeoRessources",
        period: "Sept 2023 – Fév 2024",
        location: "Nancy, France",
        description: [
          "Développement d'outils internes et d'applications pour le laboratoire de recherche",
          "Travail sur des solutions de traitement et de visualisation de données",
          "Collaboration avec les chercheurs sur les besoins techniques",
        ],
      },
      {
        role: "Président d'Association Étudiante",
        company: "UTBM",
        period: "Fév 2022 – Sept 2023",
        location: "Belfort, France",
        description: [
          "Direction et gestion d'une association étudiante à l'université",
          "Organisation d'événements et coordination des activités d'équipe",
          "Développement de compétences en leadership et gestion de projet",
        ],
      },
    ],
  },
  projects: {
    title: "Projets",
    viewSite: "Voir le site",
    viewCode: "Voir le code",
    viewMore: "En savoir plus",
    items: [
      {
        title: "Synoligo.com",
        category: "Développement Web",
        description:
          "Site vitrine créé from scratch pour une entreprise biotech. Rendu côté serveur, optimisation SEO et design moderne mettant en valeur les services de l'entreprise.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
        link: "https://synoligo.com",
        type: "web" as const,
      },
      {
        title: "BonkCoin.com",
        category: "Web3 / Crypto",
        description:
          "Site officiel de la cryptomonnaie BONK. Landing page responsive avec intégrations Web3, affichage d'informations token et éléments interactifs pour la communauté crypto.",
        tags: ["React", "Web3", "JavaScript", "CSS"],
        link: "https://bonkcoin.com",
        type: "web" as const,
      },
      {
        title: "Plugins Serveur Minecraft",
        category: "Développement de Jeux",
        description:
          "Plugins custom pour serveur Minecraft développés en Java. Mécaniques de jeu personnalisées, systèmes de gestion des joueurs et gestion d'événements côté serveur.",
        tags: ["Java", "Spigot API", "MySQL", "Game Design"],
        type: "game" as const,
      },
      {
        title: "Projets Jeux Vidéo",
        category: "Développement de Jeux",
        description:
          "Projets de jeux interactifs développés avec le moteur Unity. Mécaniques de gameplay, systèmes physiques et design d'interface pour des expériences joueurs engageantes.",
        tags: ["Unity", "C#", "Game Design", "3D/2D"],
        type: "game" as const,
      },
    ],
  },
  skills: {
    title: "Compétences",
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      tools: "Outils & DevOps",
      other: "Autres",
    },
  },
  education: {
    title: "Formation",
    items: [
      {
        degree: "Diplôme d'Ingénieur en Informatique",
        school: "Université de Technologie de Belfort-Montbéliard (UTBM)",
        period: "2020 – 2025",
        description:
          "Cours pertinents en Conception Structurelle et Gestion de Projet",
      },
    ],
  },
  contact: {
    title: "Me Contacter",
    subtitle:
      "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou simplement envie de dire bonjour, n'hésitez pas !",
    emailBtn: "Envoyer un email",
    formName: "Votre Nom",
    formEmail: "Votre Email",
    formMessage: "Votre Message",
    formSend: "Envoyer",
  },
  footer: {
    designed: "Conçu & Développé par Thibault Mayer",
    rights: "Tous droits réservés.",
  },
};

export default fr;
