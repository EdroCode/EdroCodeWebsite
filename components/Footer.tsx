// components/Footer.js
import LinksModal from "@/components/LinksModal";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 hover:border-gray-500 transition-all duration-200">
      <div className="w-full mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-sm text-gray-700 font-mono">
          $ Built with Next.js
        </span>
        <div className="flex gap-3">
          <LinksModal />
        </div>
      </div>
    </footer>
  );
}
