"use client";

import { motion } from "framer-motion";
import { WavySeparator } from "@/components/shared/wavy-separator";

const workExperiences = [
  {
    company: "SAV+",
    role: "Stagiaire Support & Web ",
    period: "Novembre 2023 — Avril 2024",
    description:
      "Cette première expérience professionnelle m'a permis de découvrir le fonctionnement d'une entreprise, le support technique et la relation client. J'ai participé à la gestion de demandes utilisateurs, au suivi de projets et à l'amélioration de certains processus internes.",
    achievements: [
      "Support technique — Assistance aux utilisateurs et résolution de problèmes courants.",
      "Relation client — Comprendre les besoins et apporter des réponses adaptées.",
      "Communication — Échanger efficacement avec les équipes et les clients.",
      "Organisation — Gérer plusieurs demandes avec méthode et rigueur.",
      "Résolution de problèmes — Analyser rapidement les situations pour proposer des solutions.",
    ],
  },
  {
    company: "PrimoCom",
    role: "Développeur Web · Collaborateur Externe ",
    period: "2025 — Aujourd'hui",
    description: (
      <>
        Après mon stage, j'ai eu l'opportunité de collaborer avec l'agence{" "}
        <a
          href="https://www.primocom.net"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity underline decoration-foreground/30 underline-offset-2"
        >
          PrimoCom
        </a>{" "}
        sur le développement et l'évolution de son site web officiel. J'interviens sur le développement de nouvelles fonctionnalités, les améliorations techniques, l'optimisation du référencement (SEO) ainsi que la maintenance continue du site afin de garantir ses performances et sa fiabilité.
        Cette collaboration m'a permis de consolider mes compétences en développement web moderne et de travailler sur un projet réel répondant aux besoins d'une entreprise.
      </>
    ),
    achievements: [
      "Next.js — Développement de fonctionnalités modernes avec l'App Router.",
      "React — Création d'interfaces dynamiques et réutilisables.",
      "Tailwind CSS — Conception d'interfaces sobres, responsives et performantes.",
      "Maintenance Web — Évolution continue et correction des problèmes techniques.",
      <>
        Developed the{" "}
        <a
          href="https://app.utilify.xyz/ucl"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity underline decoration-foreground/30 underline-offset-2"
        >
          Campaign page
        </a>{" "}
        for the souvenir NFT distributed for the UCL final in partnership with
        Turkish Airlines.
      </>,
    ],
  },

  {
    company: "Freelance",
    role: "Développeur & Assistant Community Manager",
    period: "2025 — AUjourd'hui",
    description:
      "En parallèle de mes projets personnels, j'accompagne différents clients sur des missions mêlant développement web, communication digitale et optimisation de leur présence en ligne. Cette expérience m'a permis de mieux comprendre les besoins des utilisateurs tout en renforçant ma capacité à créer des solutions adaptées, aussi bien sur le plan technique que sur celui de la communication.",
    achievements: [
      "Développement Web — Création et amélioration de sites répondant aux besoins des clients.",
      "Communication digitale — Rédaction de contenus clairs et adaptés aux différentes audiences.",
      "Expérience utilisateur — Amélioration des interactions pour une navigation plus fluide.",
      "Relation client — Comprendre les attentes afin de proposer des solutions pertinentes.",
      "Gestion de projet — Organiser les tâches et assurer le suivi des différentes missions.",
    ],
  },
];

export function WorkClient() {
  return (
    <main>
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-2"
      >
        <p className="text-[15px] leading-relaxed opacity-80">
          Mon parcours dans le développement web s'est construit progressivement, à travers des expériences professionnelles, des projets concrets et une volonté constante d'apprendre.
          Chaque étape m'a permis d'acquérir de nouvelles compétences, d'améliorer ma façon de travailler et de mieux comprendre les besoins des utilisateurs comme ceux des entreprises.
          Aujourd'hui, je poursuis cette évolution en développant des applications web modernes, en explorant les possibilités offertes par l'intelligence artificielle et l'automatisation, tout en restant curieux des nouvelles technologies qui façonnent le web de demain.
        </p>
      </motion.header>

      <WavySeparator />

      <section>
        {workExperiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="py-8 border-b border-foreground/10 last:border-0"
          >
            <header className="mb-6">
              <h2 className="font-medium text-xl mb-2 tracking-tight flex items-center gap-2">
                {experience.company}
              </h2>
              <div className="flex items-center gap-2 text-[13px] opacity-50 tracking-tight">
                <span>{experience.role}</span>
                <span>·</span>
                <time>{experience.period}</time>
              </div>
            </header>

            <p className="text-[15px] leading-relaxed opacity-80 mb-4">
              {experience.description}
            </p>

            <h5 className="font-medium text-xl mb1 flex items-center gap-2">
                Technologies et compétences développées
              </h5>
            <ul className="text-[15px] leading-relaxed opacity-80 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 opacity-40">—</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>

      <WavySeparator />

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-2"
      >
        <h4 className="font-medium text-xl mb-2 tracking-tight flex items-center gap-2">Aujourd'hui</h4>
        <p className="text-[16px] leading-relaxed opacity-80">
          Je continue d'approfondir mes compétences en développement web moderne, notamment autour de Next.js, Laravel, de l'intelligence artificielle et de l'automatisation. Mon objectif est de concevoir des applications toujours plus performantes, utiles et évolutives, tout en restant en veille permanente sur les technologies qui transforment le développement logiciel.
        </p>
      </motion.header>
    </main>
  );
}
