// app/home/page.tsx
import Navcard from "@/components/Navcard";
import ProjectLink from "@/components/ProjectLink";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-15">
      <div className="flex items-center mb-4 gap-4">
        <div className="hidden md:inline-flex items-center gap-3 border border-gray-200 bg-gray-200 rounded-sm px-3 py-1.5 text-sm text-zinc-800 font-mono">
          <span>&gt;_</span>
          <a href="./terminal" className="cursor-pointer">
            <span>Last updated June 2026</span>
          </a>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 text-sm text-zinc-800">
          <span className="w-2 h-2 bg-alien" />
          <span className="w-2 h-2 bg-dojo" />
          <span className="w-2 h-2 bg-cesium" />
          <span className="w-2 h-2 bg-bugs" />
          <span className="font-normal">Open to internships · Summer 2026</span>
        </div>
      </div>

      <h1 className="font-zen-dots text-6xl tracking-tight text-gray-900 mb-5">
        Pedro Coutinho
      </h1>
      <p className="font-mono text-sm text-zinc-500 mb-6 flex items-center gap-2">
        <span>aka Edro</span>
        <span>·</span>
        <a
          href="https://github.com/EdroCode"
          target="_blank"
          className="text-bugs hover:underline"
        >
          @EdroCode
        </a>
      </p>
      <p className="text-lg text-gray-500 w-full leading-relaxed mb-10">
        Computer Engineering student at UMinho. I build tools I want to use.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <Navcard
          title="Projects"
          description="Real implementations and case studies"
          path="/projects"
        />
        <Navcard
          title="Code Library"
          description="Reusable snippets and patterns"
          path="/archive"
        />
        <Navcard
          title="Tutorials"
          description="Step-by-step video guides"
          path="/tutorials"
        />
      </div>

      <hr className="border-gray-200 mb-10" />

      <div className="mb-10">
        <p className="text-sm text-gray-400 font-mono mb-2">current_focus</p>
        <div className="flex flex-col gap-2">
          <p className="text-gray-800 leading-relaxed">
            Building <span className="font-semibold text-bugs">RollKeeper</span>{" "}
            - a single-tab dashboard for TTRPG Dungeon Masters.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Building <span className="font-semibold text-dojo">moodiUM</span> -
            mood, habits, and goals in one place.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Contributing to{" "}
            <span className="font-semibold text-cesium">Yearbook</span> - an
            online yearbook platform at{" "}
            <a
              href="https://cesium.di.uminho.pt/en"
              target="_blank"
              className="font-semibold text-cesium hover:underline"
            >
              CeSIUM
            </a>
            .
          </p>
        </div>
      </div>

      <hr className="border-gray-200 mb-10" />

      <div>
        <p className="text-sm text-gray-400 font-mono mb-6">recently_added</p>
        <ul className="space-y-5">
          <ProjectLink
            href="https://github.com/EdroCode/Celmata"
            title="Celmata"
            tags={["C", "JavaScript"]}
            description="Terminal-based ecosystem simulator written in C."
          />
          <hr className="border-gray-200" />
          <ProjectLink
            href="https://github.com/edrocode/rollkeeper"
            title="RollKeeper"
            tags={["NextJS", "TypeScript"]}
            description="Single-tab dashboard for TTRPG Dungeon Masters."
          />
          <hr className="border-gray-200" />
          <ProjectLink
            href="https://github.com/EdroCode/Moodium"
            title="MoodiUM"
            tags={["NextJS", "TypeScript", "Clerk", "Supabase"]}
            description="Personal mood and habit journal."
          />
          <hr className="border-gray-200" />
          <ProjectLink
            href="https://github.com/TomasLFerreira/healthium"
            title="Healthium"
            award="BugsByte 2026 🥉"
            tags={["Vue 3", "FastAPI"]}
            description="AI nutrition platform built in 48 hours at BugsByte."
          />
          <hr className="border-gray-200" />
          <ProjectLink
            href="https://github.com/cesium/yearbook"
            title="CeSIUM Yearbook"
            tags={["Elixir", "Phoenix Liveview"]}
            description="Online yearbook platform for UMinho's CS student centre."
          />
        </ul>
      </div>
    </div>
  );
}
