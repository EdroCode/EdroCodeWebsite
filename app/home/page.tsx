// app/page.tsx
import Navcard from "@/components/Navcard";
import ProjectLink from "@/components/ProjectLink";
import LinksModal from "@/components/LinksModal";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-2 py-20">
      <div className="flex items-center mb-4 gap-4">
        <div className="hidden md:inline-flex items-center gap-3 border border-gray-200 bg-gray-200 rounded-sm px-3 py-1.5 text-sm text-zinc-800 font-mono">
          <span>&gt;_</span>
          <span>Last updated Apr 2026</span>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-200 rounded-sm px-3 py-1.5 text-sm text-zinc-800 font-mono">
          <span className="w-2 h-2 rounded-full bg-alien shrink-0"></span>
          <span>Open to internships · Summer 2026</span>
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
      <p className="text-lg text-gray-500 w-full leading-relaxed mb-14">
        Computer Science student at UMinho building tools I actually want to
        use.
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

      <hr className="border-gray-300 mb-10" />

      <div className="mb-10">
        <p className="text-sm text-gray-400 font-mono mb-2">$ current_focus</p>
        <p className="text-gray-800 leading-relaxed">
          Building <span className="font-semibold text-bugs">RollKeeper</span> -
          a single-tab dashboard for TTRPG Dungeon Masters.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Contributing to{" "}
          <span className="font-semibold text-cesium">Yearbook</span> - an
          online yearbook platform built at{" "}
          <a
            href="https://cesium.di.uminho.pt/en"
            target="_blank"
            className="font-semibold text-ceium"
          >
            @CeSIUM
          </a>
          .
        </p>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div>
        <p className="text-sm text-gray-400 font-mono mb-6">$ recently_added</p>
        <ul className="space-y-5">
          <ProjectLink
            href="https://github.com/EdroCode/EdroCodeWebsite"
            title="Personal Website"
            award=""
            tags={["NextJS", "TypeScript"]}
            description="Simple personal website to share my projects and host content for my youtube."
          />
          <ProjectLink
            href="https://github.com/TomasLFerreira/healthium"
            title="Healthium"
            award="BugsByte 2026 🥉"
            tags={["Vue 3", "FastAPI"]}
            description="A system for tracking health metrics with real-time backend sync."
          />
          <hr className="border-gray-300" />
          <ProjectLink
            href="https://github.com/edrocode/rollkeeper"
            title="RollKeeper"
            tags={["Elixir", "Phoenix Liveview"]}
            description="A single-tab dashboard for TTRPG Dungeon Masters."
          />
          <hr className="border-gray-300" />
          <ProjectLink
            href="https://github.com/cesium/yearbook"
            title="CeSIUM Yearbook"
            tags={["Elixir", "Phoenix Liveview"]}
            description="An online yearbook website."
          />
        </ul>
      </div>
    </div>
  );
}
