// app/about/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };
import { Download, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col gap-3 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-baseline">
            <h1 className="text-6xl font-zen-dots tracking-tight text-alien">
              |
            </h1>
            <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900">
              About
            </h1>
          </div>

          <div className="flex gap-2">
            <a
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:underline"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base sm:text-lg font-mono tracking-tight text-gray-900">
                View CV
              </span>
              <ExternalLink className="w-4 sm:w-5 shrink-0" />
            </a>
            <a
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:underline"
              href="/cv.pdf"
              download="cv.pdf"
            >
              <span className="text-base sm:text-lg font-mono tracking-tight text-gray-900">
                Download CV
              </span>
              <Download className="w-4 sm:w-5 shrink-0" />
            </a>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-500 font-mono">
          How I work and what I focus on
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <p className="text-sm text-gray-400 font-mono mb-4">whoami</p>
          <div className="space-y-3 text-gray-800 leading-relaxed">
            <p>
              Computer Engineering student at UMinho, based in Braga. I got into
              programming the same way most people do - I wanted to make games,
              and at some point making them became more interesting than playing
              them.
            </p>
            <p>
              Most of what I build comes from something that bugged me: a
              missing tool, a clunky workflow, a problem nobody had solved quite
              right. That&apos;s how RollKeeper started - one too many browser
              tabs open during an RPG session.
            </p>
            <p>
              Outside personal projects I contribute to open source at CeSIUM
              and teach kids to code at CoderDojo Braga. I work best with a
              balance of focused solo work and occasional discussion to clarify
              ideas.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">experience</p>
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
                Contributing to a few projects at UMinho&apos;s CS student
                centre — the yearbook platform (Elixir/Phoenix), the Gallium
                website, and the BugsByte landing page.
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
                Mentor young students in programming by teaching Scratch and
                Python through interactive, project-based workshops, helping
                them develop computational thinking and problem-solving skills.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">awards</p>
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
              , an AI nutrition platform, with a team over 48 hours. Vue 3 on
              the front, FastAPI and GPT-4o on the back. We went from nothing to
              a working demo by Sunday afternoon.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
          <p className="text-sm text-gray-400 font-mono mb-6">skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Languages",
                value:
                  "TypeScript, Python, C, JavaScript, Haskell, Elixir, GDScript",
              },
              { label: "Frontend", value: "Vue 3, HTML, CSS, Tailwind CSS" },
              {
                label: "Backend",
                value: "Phoenix LiveView, FastAPI, REST APIs",
              },
              { label: "Tools", value: "Git, Linux, Vite, Godot, Typst" },
              { label: "Other", value: "Raspberry Pi, OpenAI API" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <p className="font-mono text-sm font-semibold text-gray-900 mb-2">
                  {label}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
