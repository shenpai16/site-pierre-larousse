// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1E1E2F] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide text-[#FFD700]">
          Lycée Pierre Larousse
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:text-[#FFD700] transition">Accueil</a>
          <a href="/about" className="hover:text-[#FFD700] transition">À propos</a>
          <a href="/vie-scolaire" className="hover:text-[#FFD700] transition">Vie scolaire</a>
          <a href="/contact" className="hover:text-[#FFD700] transition">Contact</a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#1E1E2F] px-6 pb-4 space-y-2 text-sm font-medium animate-slide-down">
          <a href="/" className="block hover:text-[#FFD700] transition">Accueil</a>
          <a href="/about" className="block hover:text-[#FFD700] transition">À propos</a>
          <a href="/vie-scolaire" className="block hover:text-[#FFD700] transition">Vie scolaire</a>
          <a href="/contact" className="block hover:text-[#FFD700] transition">Contact</a>
        </nav>
      )}
    </header>
  );
}