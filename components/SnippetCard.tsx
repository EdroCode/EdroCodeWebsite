// components/SnippetCard.tsx
"use client";

type SnippetCardProps = {
  id: string;
  title: string;
  description?: string;
  code: string;
  tags?: string[];
};

export default function SnippetCard({
  id,
  title,
  description,
  code,
  tags = [],
}: SnippetCardProps) {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      <div className="p-5 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <p className="text-zinc-900 font-mono text-lg">{title}</p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                document.getElementById(id)?.innerText ?? "",
              )
            }
            className="text-sm text-zinc-500 hover:text-black hover:font-bold cursor-pointer font-mono transition"
          >
            copy
          </button>
        </div>
        {description && (
          <p className="text-gray-600 text-sm mb-3">{description}</p>
        )}
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
      <pre
        id={id}
        className="flex bg-white text-sm p-5 overflow-x-auto font-mono text-zinc-800"
      >
        <code className="p-2 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
