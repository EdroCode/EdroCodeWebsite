export default function LastUpdated() {
  return (
    <div className="hidden md:inline-flex items-center gap-3 border border-gray-200 bg-gray-200 rounded-sm px-3 py-1.5 text-sm text-zinc-800 font-mono">
      <span>&gt;_</span>
      <a href="./terminal" className="cursor-pointer">
        <span>Last updated September 2026</span>
      </a>
    </div>
  );
}
