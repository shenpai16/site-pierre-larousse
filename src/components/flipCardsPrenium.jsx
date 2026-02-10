export default function FlipCardsPrenium({ title, description, icon }) {
    return (
    <div
      className="
        relative w-80 min-h-64 bg-white rounded-2xl shadow-xl border border-[#1A4C8B]/10 
        overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2
      "
    >

      {/* Bandeau doré */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C57F2E] to-[#a96a24]"></div>

      {/* Contenu principal */}
      <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
        
        {/* Médaillon icône */}
        <div className="w-16 h-16 rounded-full bg-[#1A4C8B]/10 flex items-center justify-center text-3xl">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-[#1A4C8B] tracking-wide">
          {title}
        </h3>

        {/* Description masquée au départ */}
        <p
          className="
            text-gray-700 leading-relaxed text-sm opacity-0 max-h-0 
            group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500
          "
        >
          {description}
        </p>
      </div>

    </div>
  );
}
