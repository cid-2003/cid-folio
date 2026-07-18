export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  highlights: { title: string; description: string }[];
  tags: string[];
  category: "Application Web" | "Plateforme éducative" | "Site" | "Blog";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "arbre-du-savoir",
    title: "Arbre du savoir",
    description: "Une application de recherche de livres permettant d'explorer un catalogue grâce à l'API Google Books.",
    longDescription:
      "Arbre du savoir est une application web développée avec React et Vite permettant aux utilisateurs de rechercher et découvrir des livres grâce aux données fournies par Google Books API.Le projet met en avant la consommation d'une API externe, l'affichage dynamique de contenus et la création d'une expérience utilisateur simple autour de la recherche documentaire. Cette réalisation m'a permis d'approfondir mes compétences en React, TypeScript et dans la gestion de données provenant de services tiers.",
    image: "/images/projects/cid-book.png",
    screenshots: [
      "/images/projects/cid-book-detail.png"
    ],
    highlights: [
      { title: "Recherche de livres", description: "Mise en place d'un système permettant aux utilisateurs de retrouver facilement des ouvrages." },
      { title: "Utilisation de Google Books API", description: "Intégration d'un service externe pour récupérer automatiquement les informations des livres." },
      { title: "Affichage dynamique", description: "Présentation des résultats de recherche avec une interface adaptée aux différents contenus." },
      { title: "Développement TypeScript", description: "Utilisation du typage pour améliorer la qualité et la robustesse du code." },
      { title: "Architecture React", description: "Organisation du projet autour de composants réutilisables et maintenables." },
    ],
    tags: ["React", "Vite", "TypeScript", "Google Books API", "Tailwind"],
    category: "Plateforme éducative",
    liveUrl: "https://arbre-du-savoir.vercel.app/",
    featured: false,
    date: "2025-01-01",
  },
  {
    id: "2",
    slug: "cid-movie",
    title: "Cid Movie",
    description: "Une application web moderne permettant de découvrir et rechercher des films grâce aux données fournies par l'API TMDB.",
    longDescription:
      "CID Movie est une application de découverte de films développée avec React et Vite. Le projet utilise l'API TMDB afin de récupérer et afficher des informations sur différents films. L'objectif était de créer une expérience simple et intuitive permettant aux utilisateurs d'explorer un catalogue de films tout en travaillant sur la consommation d'une API externe, la gestion des données et la création d'une interface moderne et responsive. Ce projet m'a permis de renforcer mes compétences en développement frontend moderne, en TypeScript et dans l'intégration de services externes.",
    image: "/images/projects/cid-movie.png",
    screenshots: ["/images/projects/cid-movie-detail.png"],
    highlights: [
      { title: "Intégration de l'API TMDB", description: "Connexion à une API externe pour récupérer et afficher dynamiquement les informations des films." },
      { title: "Interface moderne", description: "Création d'une interface claire permettant une navigation fluide entre les différents contenus." },
      { title: "Gestion des données", description: "Manipulation et affichage de données provenant d'une source externe avec une structure organisée." },
      { title: "Développement avec TypeScript", description: "Utilisation du typage pour améliorer la fiabilité et la maintenabilité du code." },
      { title: "Application performante avec Vite", description: "Configuration d'un environnement moderne offrant un développement rapide et une meilleure expérience de build." },
    ],
    tags: ["React.js", "TypeScript", "Tailwind", "Vite", "SCSS", "TMDB API"],
    category: "Application Web",
    githubUrl: "https://github.com/cid-2003/cid-movie",
    liveUrl: "https://cid-movie.vercel.app/",
    featured: false,
    date: "2025-03-15",
  },
  {
    id: "3",
    slug: "cid-blog",
    title: "Cid Blog",
    description: "Une plateforme de blog développée avec Laravel permettant de gérer et publier du contenu.",
    longDescription:
      "CID Blog est une plateforme de blog développée avec Laravel et Livewire. Le projet a été conçu pour explorer le développement Backend avec PHP et la création d'une application complète de gestion de contenu. À travers ce projet, j'ai travaillé sur la logique serveur, la gestion des données et l'interactivité côté utilisateur grâce à Livewire. Cette réalisation représente une étape importante dans mon apprentissage du développement Backend et de l'écosystème Laravel.",
    image: "/images/projects/cid-blog.png",
    screenshots: ["/images/projects/cid-blog-detail.png"],
    highlights: [
      { title: "Architecture Laravel", description: "Création d'une application structurée en utilisant les bonnes pratiques du framework Laravel." },
      { title: "Gestion du contenu", description: "Mise en place d'une logique permettant l'organisation et la gestion des articles." },
      { title: "Gestion des données", description: "Manipulation d'une base de données pour stocker et organiser les informations du blog." },
      { title: "Interactivité avec Livewire", description: "Création d'interactions dynamiques sans dépendre entièrement de JavaScript côté client." },
      { title: "Développement Backend", description: "Approfondissement des concepts serveur, routes, logique métier et organisation du code." },
    ],
    tags: ["PHP", "Livewire", "Laravel", "Blade", "DBeaver", "Docker", "Tailwind"],
    category: "Blog",
    githubUrl: "https://github.com/cid-2003/cid-blog",
    featured: false,
    date: "2026-02-20",
  },
  {
    id: "4",
    slug: "cidevent",
    title: "Site vitrine — CID Event",
    description: "Un site vitrine simple et élégant conçu pour présenter un événement et communiquer efficacement son identité.",
    longDescription:
      "CID Event est un site vitrine développé avec HTML, CSS et JavaScript ayant pour objectif de présenter un événement à travers une interface claire et attractive. Le projet met l'accent sur la présentation visuelle, l'organisation du contenu et l'expérience utilisateur afin de transmettre efficacement les informations importantes. Cette réalisation m'a permis de renforcer mes bases en développement frontend et en création d'interfaces adaptées aux besoins de présentation.",
    image: "/images/projects/cid-event.png",
    screenshots: [
      "/images/projects/cid-event-detail-1.png",
    ],
    highlights: [
      { title: "Structure HTML", description: "Création d'une structure claire permettant une organisation efficace des différentes sections du site." },
      { title: "Design responsive", description: "Adaptation de l'interface pour garantir une bonne expérience sur différents appareils." },
      { title: "Interactions JavaScript", description: "Ajout de comportements dynamiques pour améliorer l'expérience utilisateur." },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Site",
    liveUrl: "https://cidevent.vercel.app", 
    featured: false,
    date: "2024-06-01",
  },

    {
    id: "5",
    slug: "sikajob",
    title: "SikaJob (En cours)",
    description: "Une plateforme de recrutement moderne, sécurisée et évolutive, offrant une expérience fluide aussi bien aux recruteurs qu'aux candidats.",
    longDescription:
      "Une plateforme moderne de recrutement conçue pour simplifier la mise en relation entre les entreprises et les candidats. Le projet met l'accent sur une expérience utilisateur soignée, une architecture robuste et un développement Full Stack avec les technologies les plus récentes.",
    image: "/images/projects/sikajob.png",
    screenshots: [
      "/images/projects/sikajob-detail.avif",
    ],
    highlights: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind CSS", "UploadThing", "Arject", "Neon", "Vercel"],
    category: "Application Web",
    liveUrl: "", 
    featured: false,
    date: "2024-06-01",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
