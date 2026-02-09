// src/components/HeroSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  "/assets/hero/luffyWP2.jpg",
  "/assets/hero/luffyWP.jpg",
];

export default function HeroSwiper() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] border-b-8 border-[#1A4C8B]">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay dégradé premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-10"></div>

      {/* Texte */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFD700] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] tracking-wide">
          Bienvenue au Lycée Pierre Larousse
        </h1>
        <p className="text-lg md:text-2xl text-white mt-4 drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]">
          Welcome to the school Pierre Larousse
        </p>
      </div>

    </div>
  );
}