// app/projects/page.tsx
"use client";
import type { Metadata } from "next";
import { useState } from "react";

const webProjects = [
  {
    title: "Healthium",
    award: "BugsByte 2026 🥉",
    tags: ["Vue 3", "FastAPI", "GPT-4o"],
    description:
      "AI nutrition platform built in 48 hours at BugsByte. Users log meals, get macro tracking, and AI dietary suggestions. Team of 4, zero to demo in a weekend.",
    href: "https://github.com/TomasLFerreira/healthium",
  },
  {
    title: "RollKeeper",
    tags: ["Next.js", "TypeScript"],
    status: "In development",
    description:
      "All your RPG tools in one tab. Tracks initiative, HP, conditions, and notes so the DM can focus on the game instead of the browser.",
    href: "https://github.com/EdroCode/RollKeeper",
  },
  {
    title: "moodiUM",
    tags: ["Next.js", "TypeScript", "Supabase", "Clerk"],
    status: "Paused",
    description:
      "Personal mood journal. Log your mood, see the pattern, understand yourself. Dashboard, calendar view, streaks, and weekly summaries.",
    href: "https://github.com/EdroCode/Moodium",
  },
  {
    title: "CeSIUM Yearbook",
    tags: ["Elixir", "Phoenix LiveView"],
    description:
      "Online yearbook platform for UMinho's CS student centre. Open source contribution with PRs and feature work on a production app used by hundreds of students.",
    href: "https://github.com/cesium/yearbook",
  },
  {
    title: "Celmata",
    tags: ["C"],
    status: "In development",
    description:
      "Terminal ecosystem simulator in C. Survival emerges from the rules.",
    href: "https://github.com/EdroCode/Celmata",
  },
  {
    title: "HeroLab",
    tags: ["Godot", "GDScript"],
    description:
      "Interactive RPG character manager with inventory, attributes, and live combat. The predecessor idea that grew into RollKeeper.",
    href: "https://github.com/EdroCode/HeroLab",
  },
  {
    title: "StellarForge",
    tags: ["Godot", "GDScript"],
    description:
      "Craft your own constellations, which act as dynamic skill trees. Draw a shape in the sky, get a build.",
    href: "https://github.com/EdroCode/StellarForge",
  },
  {
    title: "MineCeeper",
    tags: ["C"],
    description: "Minesweeper in the terminal, written in C out of boredom.",
    href: "https://github.com/EdroCode/MineCeeper",
  },
  {
    title: "CanSat",
    tags: ["Python", "Raspberry Pi"],
    description:
      "Code and documentation for a high-altitude weather balloon equipped with a Raspberry Pi and environmental sensors.",
    href: "https://github.com/EdroCode/CanSat",
  },
  {
    title: "DUCKS-GAME",
    tags: ["Haskell"],
    description:
      "University project for Laborat\u00f3rios de Inform\u00e1tica I, written in Haskell.",
    href: "https://github.com/EdroCode/DUCKS-GAME",
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

const allProjects = [
  ...webProjects.map((p) => ({ ...p, category: "web_and_tools" })),
  ...gameProjects.map((p) => ({ ...p, category: "games" })),
];

const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort();

type Project = {
  title: string;
  award?: string;
  status?: string;
  tags: string[];
  description: string;
  href: string;
  category: string;
};

function ProjectCard({
  title,
  award,
  status,
  tags,
  description,
  href,
}: Project) {
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
          {status && (
            <span className="text-sm font-semibold text-dojo">{status}</span>
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
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? allProjects.filter((p) => p.tags.includes(activeTag))
    : allProjects;

  const webFiltered = filtered.filter((p) => p.category === "web_and_tools");
  const gameFiltered = filtered.filter((p) => p.category === "games");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-8">
        <div className="flex items-baseline">
          <h1 className="text-6xl font-zen-dots tracking-tight text-cesium mb-4">
            |
          </h1>
          <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900 mb-4">
            Projects
          </h1>
        </div>
        <p className="text-lg text-zinc-500 font-mono">Work worth showing.</p>
      </div>

      <hr className="border-gray-200 mb-8" />

      <div className="flex gap-2 flex-wrap mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs font-mono px-3 py-1 rounded-sm border transition-colors cursor-pointer ${
            activeTag === null
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-200 text-zinc-500 hover:border-gray-400"
          }`}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-xs font-mono px-3 py-1 rounded-sm border transition-colors cursor-pointer ${
              activeTag === tag
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 text-zinc-500 hover:border-gray-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {webFiltered.length > 0 && (
        <div className="mb-16">
          <p className="text-sm text-gray-400 font-mono mb-6">web_and_tools</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webFiltered.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      )}

      {webFiltered.length > 0 && gameFiltered.length > 0 && (
        <hr className="border-gray-200 mb-10" />
      )}

      {gameFiltered.length > 0 && (
        <div className="mb-16">
          <p className="text-sm text-gray-400 font-mono mb-6">games</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gameFiltered.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-sm text-gray-400 font-mono">
          no projects match that filter.
        </p>
      )}
    </div>
  );
}
