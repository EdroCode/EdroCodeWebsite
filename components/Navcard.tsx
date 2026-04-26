// components/Navcard.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import LinksModal from "@/components/LinksModal";

type NavcardProps = {
  title: string;
  description: string;
  path: string;
};

export default function Navcard({ title, description, path }: NavcardProps) {
  return (
    <Link
      href={path}
      className="group border border-gray-300 rounded-sm p-6 hover:border-gray-500 hover:shadow-sm transition-all flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronRight className="text-gray-400 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-transform w-4 h-4" />
      </div>
      <p className="text-sm text-gray-400 leading-snug">{description}</p>
    </Link>
  );
}
