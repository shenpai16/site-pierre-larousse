import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="bg-[#6050DC] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FFD700]">
          Lycée Majorelle
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-[#FFD700]">Accueil</a>
          <a href="/about" className="hover:text-[#FFD700]">À propos</a>
          <a href="/vie-scolaire" className="hover:text-[#FFD700]">Vie scolaire</a>
          <a href="/contact" className="hover:text-[#FFD700]">Contact</a>
        </div>

        {/* Bouton mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#6050DC] px-4 pb-4 space-y-2">
          <a href="/" className="block hover:text-[#FFD700]">Accueil</a>
          <a href="/about" className="block hover:text-[#FFD700]">À propos</a>
          <a href="/vie-scolaire" className="block hover:text-[#FFD700]">Vie scolaire</a>
          <a href="/contact" className="block hover:text-[#FFD700]">Contact</a>
        </div>
      )}
    </nav>
    );
}