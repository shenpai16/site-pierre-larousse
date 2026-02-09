export default function FlipCards({ frontColor, backColor, icon, title, description }) {
  return (
    <div className="w-80 min-h-96 perspective mx-auto">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">

        {/* Face avant */}
        <div
          className="absolute w-full h-full rounded-xl shadow-xl flex flex-col items-center justify-center text-[#FAF7F2] text-center px-6 backface-hidden border-2 border-[#C57F2E]"
          style={{ backgroundColor: frontColor }}
        >
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
        </div>

        {/* Face arrière */}
        <div
          className="absolute w-full h-full rounded-xl shadow-xl flex items-center justify-center text-[#FAF7F2] text-center px-6 rotate-y-180 backface-hidden border-2 border-[#1A4C8B]"
          style={{ backgroundColor: backColor }}
        >
          <p className="text-base leading-relaxed">{description}</p>
        </div>

      </div>
    </div>
  );
}