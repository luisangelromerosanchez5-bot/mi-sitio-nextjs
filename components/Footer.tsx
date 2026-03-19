// components/Footer.tsx
// Server Component: Footer estático con año dinámico

import { siteConfig } from "../lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-10 py-6 px-5">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        <p>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
