// app/projects/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Projects" };

const webProjects = [
  {
    title: "Healthium",
    award: "BugsByte 2026 🥉",
    tags: ["Vue 3", "FastAPI", "GPT-4o"],
    description:
      "Full-stack AI nutrition platform built in 48 hours at BugsByte Hackathon. Users log meals, get real-time macro tracking, and receive AI-powered dietary suggestions. Shipped from zero to demo in a single weekend as a team of 4.",
    href: "https://github.com/EdroCode",
  },
  {
    title: "RollKeeper",
    tags: ["Elixir", "Phoenix LiveView"],
    description:
      "A single-tab dashboard for TTRPG Dungeon Masters. Tracks initiative, HP, conditions, and notes in real time - no more juggling five browser tabs mid-session.",
    href: "https://github.com/EdroCode/rollkeeper",
  },
  {
    title: "CeSIUM Yearbook",
    tags: ["Elixir", "Phoenix LiveView"],
    description:
      "Online yearbook platform for UMinho's CS student centre. Open source contribution with PRs and feature work on a production app used by hundreds of students.",
    href: "https://github.com/cesium/yearbook",
  },
  {
    title: "HeroLab",
    tags: ["Godot", "GDScript"],
    description:
      "An interactive live RPG dashboard meant to be played live with viewers. The predecessor idea that evolved into RollKeeper.",
    href: "https://github.com/EdroCode/HeroLab",
  },
  {
    title: "StellarForge",
    tags: ["Godot", "GDScript"],
    description:
      " Craft you own constellations, which serve as dynamic skill trees.",
    href: "https://github.com/EdroCode/StellarForge",
  },
];

const gameProjects = [
  {
    title: "Save The World",
    tags: ["Godot", "GDScript"],
    description:
      "A massive meteor hurtles toward Earth — the fate of humanity rests in your hands. Playable in browser.",
    href: "https://edroz.itch.io/save-the-world",
  },
  {
    title: "Digital Diffusal",
    tags: ["Godot", "GDScript"],
    description:
      "Defuse a bomb and solve puzzles to save thousands of lives. A tense puzzle game playable in browser.",
    href: "https://edroz.itch.io/digital-diffusal",
  },
  {
    title: "The Dark Side Of The Moon",
    tags: ["Godot", "GDScript"],
    description: "A shooter made for Godot Wild Jam #53. Playable in browser.",
    href: "https://edroz.itch.io/the-dark-side-of-the-moon",
  },
  {
    title: "Autumn Clean",
    tags: ["Godot", "GDScript"],
    description:
      "Gather all the leaves before the timer runs out. A chill browser game with a simple premise.",
    href: "https://edroz.itch.io/autumn-clean",
  },
];

type Project = {
  title: string;
  award?: string;
  tags: string[];
  description: string;
  href: string;
};

function ProjectCard({ title, award, tags, description, href }: Project) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-gray-200 rounded-sm p-6 hover:border-gray-500 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-gray-900 text-lg group-hover:underline">
            {title}
          </h2>
          {award && (
            <span className="text-sm font-semibold text-bugs">{award}</span>
          )}
        </div>
        <span className="text-gray-400 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-transform shrink-0">
          →
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-zinc-500 border border-gray-200 px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-20">
      <div className="mb-8">
        <div className="flex">
          <h1 className="text-6xl font-zen-dots tracking-tight text-cesium mb-4">
            |
          </h1>
          <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900 mb-4">
            Projects
          </h1>
        </div>
        <p className="text-lg text-zinc-500 font-mono">Work worth showing.</p>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div className="mb-16">
        <p className="text-sm text-gray-400 font-mono mb-6">$ web_and_tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {webProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div className="mb-16">
        <p className="text-sm text-gray-400 font-mono mb-6">$ games</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gameProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
