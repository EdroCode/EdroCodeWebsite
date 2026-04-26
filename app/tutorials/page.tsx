// app/tutorials/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Tutorials" };

const videos = [
  {
    id: "TLQzH5JQQlE",
    title: "2D Simple Ranged Attack – Godot",
    description:
      "A simple Godot Engine 2D player controller with movement, jumping, gravity, animations, and a knife-throw attack.",
    tags: ["Godot", "GDScript", "2D"],
  },
  {
    id: "mHYU_gJ1U6g",
    title: "2D Simple Platformer Movement – Godot",
    description:
      "A simple Godot Engine 2D player controller handling movement, jumping, gravity, sprite flipping, and animations.",
    tags: ["Godot", "GDScript", "2D"],
  },
];

function VideoCard({
  id,
  title,
  description,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-sm p-4 hover:border-gray-500 hover:shadow-sm transition-all"
    >
      <div className="relative shrink-0 w-full sm:w-56 aspect-video rounded-sm overflow-hidden bg-gray-100">
        <Image
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div>
          <h2 className="font-semibold text-gray-900 text-base group-hover:underline mb-1">
            {title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
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
      </div>
    </a>
  );
}

export default function Tutorials() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-20">
      <div className="mb-12">
        <div className="flex">
          <h1 className="font-zen-dots text-6xl tracking-tight text-godot mb-4">
            |
          </h1>
          <h1 className="font-zen-dots text-6xl tracking-tight text-gray-900 mb-4">
            Tutorials
          </h1>
        </div>
        <p className="text-lg text-zinc-500 font-mono">
          Step-by-step Godot guides.
        </p>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div>
        <p className="text-sm text-gray-400 font-mono mb-6">$ videos</p>
        <ul className="space-y-4">
          {videos.map((v) => (
            <li key={v.id}>
              <VideoCard {...v} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
