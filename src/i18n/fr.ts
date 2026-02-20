const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    languages: "Langues",
    involvement: "Associatif",
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
    title: "Expérience Professionnelle",
    items: [
      {
        role: "Développeur Full-Stack",
        company: "The Spider",
        period: "Fév 2025 – Présent",
        location: "San Francisco, USA",
        description: [
          "Développement et maintenance d'applications web complètes",
          "Collaboration au sein d'une équipe internationale dans un environnement dynamique",
          "Conception d'interfaces performantes et adaptatives avec des technologies modernes",
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
          "Site vitrine conçu intégralement pour une entreprise de biotechnologie. Rendu côté serveur, optimisation pour le référencement et design moderne mettant en valeur les services de l'entreprise.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
        link: "https://synoligo.com",
        type: "web" as const,
      },
      {
        title: "BonkCoin.com",
        category: "Web3 / Crypto",
        description:
          "Site officiel de la cryptomonnaie BONK. Page d'accueil adaptative avec intégrations Web3, affichage des informations du jeton et éléments interactifs pour la communauté.",
        tags: ["React", "Web3", "JavaScript", "CSS"],
        link: "https://bonkcoin.com",
        type: "web" as const,
      },
      {
        title: "Plugins Serveur Minecraft",
        category: "Développement de Jeux",
        description:
          "Plugins sur mesure pour serveur Minecraft développés en Java. Mécaniques de jeu personnalisées, systèmes de gestion des joueurs et gestion d'événements côté serveur.",
        tags: ["Java", "Spigot API", "MySQL", "Game Design"],
        type: "game" as const,
      },
      {
        title: "Projets Jeux Vidéo",
        category: "Développement de Jeux",
        description:
          "Projets de jeux interactifs développés avec le moteur Unity. Mécaniques de jeu, systèmes physiques et conception d'interface pour des expériences joueurs engageantes.",
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
  languages: {
    title: "Langues",
    items: [
      {
        language: "Français",
        level: "Langue maternelle",
        detail: "",
      },
      {
        language: "Anglais",
        level: "Courant",
        detail: "Stage de 6 mois à San Francisco, États-Unis",
      },
      {
        language: "Allemand",
        level: "Notions",
        detail: "",
      },
    ],
  },
  involvement: {
    title: "Engagement Associatif",
    items: [
      {
        role: "Président d'Association Étudiante",
        organization: "UTBM",
        period: "Fév 2022 – Sept 2023",
        location: "Belfort, France",
        description: [
          "Direction et gestion d'une association étudiante au sein de l'université",
          "Organisation d'événements pour plus de 600 étudiants avec des budgets supérieurs à 8 000\u00A0\u20AC",
          "Coordination logistique des équipes et suivi du bon déroulement des activités",
        ],
      },
      {
        role: "Responsable de l'Intégration Étudiante",
        organization: "UTBM",
        period: "2022",
        location: "Belfort, France",
        description: [
          "Encadrement et coordination d'une équipe de 50 bénévoles durant la semaine d'accueil",
          "Gestion d'un budget global de plus de 20 000\u00A0\u20AC",
          "Organisation de l'accueil et de l'intégration des nouveaux étudiants",
          "Renforcement des capacités d'organisation, de communication et de conduite de projet",
        ],
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
