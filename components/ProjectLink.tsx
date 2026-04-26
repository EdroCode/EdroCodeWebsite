// components/ProjectLink.tsx
type ProjectLinkProps = {
  href: string;
  title: string;
  award?: string;
  tags?: string[];
  description: string;
};

export default function ProjectLink({
  href,
  title,
  award,
  tags = [],
  description,
}: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer group flex items-center justify-between gap-6 w-full hover:bg-black/5 rounded-md px-2 py-2"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold text-gray-900 group-hover:underline">
              {title}
            </h1>
            {award && (
              <h1 className="font-semibold tracking-tight text-bugs">
                {award}
              </h1>
            )}
          </div>
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 border border-gray-400 rounded px-2 py-0.5 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[13px] text-gray-400">{description}</p>
      </div>
    </a>
  );
}
