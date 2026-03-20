// components/Navbar.tsx
// Server Component: no tiene estado propio.
// Delega la interactividad al SearchBar (cliente).

import Link from "next/link";
import SearchBar from "./SearchBar";
import { siteConfig } from "../lib/data";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-3 sticky top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto flex items-center
                justify-between flex-col sm:flex-row gap-3">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400">
          {siteConfig.name}
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}
