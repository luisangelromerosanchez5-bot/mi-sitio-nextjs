"use client";

import { useState, type FormEvent } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Búsqueda:", query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." aria-label="Buscar en el sitio" className="px-3 py-2 text-gray-900 rounded-l-md focus:ring-2 focus:ring-blue-400 w-40 sm:w-56" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors">Buscar</button>
    </form>
  );
}