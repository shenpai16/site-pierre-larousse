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
    <div className="relative w-full h-[60vh] md:h-[80vh]">
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

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#FFD700]">
          Bienvenue au Lycée Pierre Larousse
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Welcome to the school Pierre Larousse
        </p>
      </div>
    </div>
  );
}