export default function FlipCards({ title, description, icon }) {
  return (
    <div className="relative w-80 h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-[#1A4C8B] border border-[#1A4C8B]/20 hover:shadow-2xl transition-all duration-300">

      {/* Bande dorée en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C57F2E]"></div>

      {/* Face avant */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        <div className="text-5xl mb-3 drop-shadow">{icon}</div>
        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
      </div>

      {/* Slide arrière */}
      <div className="absolute bottom-0 left-0 w-full bg-white text-[#1A4C8B] p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 shadow-inner">
        <p className="text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>

    </div>
  );
}