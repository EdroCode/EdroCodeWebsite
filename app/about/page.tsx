// app/about/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };
import LinksModal from "@/components/LinksModal";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-2 py-20">
      <div className="flex flex-col mb-12 gap-3">
        <div className="flex">
          <h1 className="text-6xl font-zen-dots tracking-tight text-alien mb-4">
            |
          </h1>
          <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900 mb-4">
            About
          </h1>
        </div>
        <p className="text-lg text-zinc-500 font-mono">
          How I work and what I focus on
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <p className="text-sm text-gray-400 font-mono mb-4">$ whoami</p>
          <div className="space-y-2 text-gray-800 leading-relaxed">
            <p>
              Computer Engineering student at UMinho, based in Braga. I got into
              programming the same way most people do - I wanted to make games,
              and at some point making them became more interesting than playing
              them.
            </p>
            <p>
              Most of what I build comes from something that bugged me: a
              missing tool, a clunky workflow, a problem nobody had solved quite
              right. That's how RollKeeper started - one too many browser tabs
              open during an RPG session.
            </p>
            <p>
              Outside personal projects I contribute to open source at CeSIUM
              and teach kids to code at CoderDojo Braga. I work best with a
              balance of focused solo work and occasional discussion to clarify
              ideas.
            </p>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">$ experience</p>
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <p className="text-zinc-950 font-mono text-lg">
                  <span className="text-cesium">CeSIUM</span> – Open Source
                  Collaborator
                </p>
                <p className="text-gray-400 font-mono text-sm self-center">
                  Nov 2025 – Present
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Contributing to open source web projects for UMinho's CS student
                centre — the yearbook platform (Elixir/Phoenix), the Gallium
                website, and the BugsByte Hackathon landing page. Real PRs, code
                reviews, public repos.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <p className="text-zinc-950 font-mono text-lg">
                  <span className="text-dojo">CoderDojo Braga</span> – Mentor
                </p>
                <p className="text-gray-400 font-mono text-sm self-center">
                  Nov 2025 – Present
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Teaching Scratch and Python to kids and beginners. Turns out
                explaining recursion to a ten-year-old is a decent way to make
                sure you actually understand it yourself.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">$ awards</p>
          <div>
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <p className="text-zinc-950 font-mono text-lg">
                <span className="text-bugs">BugsByte Hackathon</span> – 🥉 3rd
                Place
              </p>
              <p className="text-gray-400 font-mono text-sm self-center">
                February 2026
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Built <span className="text-gray-900 font-medium">Healthium</span>
              , a full-stack AI nutrition platform, in under 48 hours as part of
              a team. Vue 3, FastAPI, GPT-4o — shipped from zero to demo in a
              single weekend.
            </p>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">$ skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Languages",
                value: "Python, C, JS, Haskell, Elixir, GDScript",
              },
              {
                label: "Web",
                value: "Vue 3, Phoenix Liveview, CSS, Tailwind, HTML",
              },
              { label: "Tools", value: "Git, Typst, Godot, FastAPI, Vite" },
              {
                label: "Other",
                value: "Raspberry Pi, Linux, REST APIs, OpenAI",
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <p className="font-mono text-md font-semibold text-gray-900 mb-2">
                  {label}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-300" />
      </div>
    </div>
  );
}
