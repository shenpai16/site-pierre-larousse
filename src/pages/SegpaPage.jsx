import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

import FlipCards from '../components/FlipCards';
import FlipCardsPrenium from '../components/flipCardsPrenium';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SegpaPage() {

    const images = [
    "/assets/segpa/S.webp",
    "/assets/segpa/PhotoSegpa1.webp",
    "/assets/segpa/PhotoSegpa2.webp",

    ];

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true, 
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const opacity = Math.max(1 - scrollY / 300, 0);
    const translateY = Math.min(scrollY / 10, 30);

    return (
        <main className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 md:px-12">
        {/* Titre centré */}
        <div 
            className="flex justify-center mb-20"
            data-aos="fade-down">
            <div className="px-10 py-4 rounded-lg shadow-lg bg-[#1A4C8B] border-l-8 border-[#C57F2E]">
                <h1 className="text-3xl md:text-4xl font-bold text-[#FAF7F2] tracking-wide">
                Section SEGPA
                </h1>
            </div>
        </div>

        

        {/* Grille responsive */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Texte */}
            <div data-aos='fade-right'>
            <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                La SEGPA (Section d’Enseignement Général et Professionnel adapté) accueille des élèves
                présentant des difficultés scolaires graves et persistantes auxquelles n’ont pu remédier
                les actions de prévention, d’aide et de soutien.
            </p>
            </div>

            {/* Swiper */}
            <div 
                className="w-full h-[250px] sm:h-[300px] md:h-[400px]"
                data-aos="fade-left"
                >
            <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full rounded-xl shadow-xl border-4 border-[#1A4C8B]"
            >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                    <img
                    src={src}
                    alt={`segpa-${index}`}
                    className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            </div>
        </div>

    {/* INTERLUDE ANIMÉE */}
      <div
        className="max-w-4xl mx-auto text-center mt-32 mb-32 transition-all duration-300"
        style={{
          opacity: opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <div className="w-24 h-1 bg-[#C57F2E] mx-auto mb-6 rounded-full"></div>

        <h2 className="text-4xl font-bold text-[#1A4C8B] tracking-wide mb-4">
          Une prise en charge adaptée
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          La SEGPA accompagne chaque élève selon ses besoins, ses forces et son rythme.
          Faites défiler pour découvrir les enseignements, les objectifs et la démarche pédagogique.
        </p>
      </div>


        {/* Section d'informations */}
        <section className="max-w-5xl mx-auto mt-24 space-y-20">

        {/* Introduction */}
        <div
            className="relative bg-white p-10 rounded-2xl shadow-xl border border-[#1A4C8B]/10 overflow-hidden"
            data-aos="fade-up"
        >
            {/* Bandeau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#1A4C8B] to-[#0f2f5c]"></div>

            {/* Titre + icône */}
            <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#1A4C8B]/10 flex items-center justify-center text-3xl">
                🏫
            </div>
            <h2 className="text-2xl font-bold text-[#1A4C8B] tracking-wide">
                Une structure spécifique
            </h2>
            </div>

            {/* Texte */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
                La SEGPA (Section d’Enseignement Général et Professionnel Adapté) accueille des élèves
                présentant des difficultés scolaires graves et persistantes auxquelles n’ont pu remédier
                les actions de prévention, d’aide et de soutien.
            </p>

            <p>
                Elle scolarise maximum 64 élèves, soit 16 élèves par classe de la sixième à la troisième,
                orientés par la CDOEA ou sur décision de la CDAPH.
            </p>
            </div>
        </div>

        {/* Enseignements */}
        <div
            className="relative bg-white p-10 rounded-2xl shadow-xl border border-[#C57F2E]/10 overflow-hidden"
            data-aos="fade-up"
        >
            {/* Bandeau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#C57F2E] to-[#a96a24]"></div>

            {/* Titre + icône */}
            <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#C57F2E]/10 flex items-center justify-center text-3xl">
                📘
            </div>
            <h2 className="text-2xl font-bold text-[#C57F2E] tracking-wide">
                Les enseignements proposés
            </h2>
            </div>

            {/* Liste */}
            <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex gap-3">
                <span className="text-[#1A4C8B] font-bold">•</span>
                Des enseignements généraux assurés par des professeurs des écoles spécialisés et des enseignants du collège (EPS, Anglais).
            </li>
            <li className="flex gap-3">
                <span className="text-[#1A4C8B] font-bold">•</span>
                Des enseignements de découverte professionnelle par des professeurs de lycée professionnel.
            </li>
            <li className="flex gap-3">
                <span className="text-[#1A4C8B] font-bold">•</span>
                Deux plateaux techniques : Atelier Hygiène-Alimentation-Services et Atelier Habitat / Espace rural et environnement.
            </li>
            <li className="flex gap-3">
                <span className="text-[#1A4C8B] font-bold">•</span>
                Des stages en entreprises, des rencontres avec des professionnels et des immersions en lycée professionnel.
            </li>
            </ul>
        </div>

        {/* Objectifs */}
        <div
            className="relative bg-white p-10 rounded-2xl shadow-xl border border-[#1A4C8B]/10 overflow-hidden"
            data-aos="fade-up"
        >
            {/* Bandeau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#1A4C8B] to-[#0f2f5c]"></div>

            {/* Titre + icône */}
            <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#1A4C8B]/10 flex items-center justify-center text-3xl">
                🎯
            </div>
            <h2 className="text-2xl font-bold text-[#1A4C8B] tracking-wide">
                Les objectifs de la SEGPA
            </h2>
            </div>

            {/* Liste */}
            <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex gap-3">
                <span className="text-[#C57F2E] font-bold">•</span>
                Préparation au Certificat de Formation Générale (CFG).
            </li>
            <li className="flex gap-3">
                <span className="text-[#C57F2E] font-bold">•</span>
                Préparation au Diplôme National du Brevet Professionnel (DNB pro).
            </li>
            <li className="flex gap-3">
                <span className="text-[#C57F2E] font-bold">•</span>
                Construire un projet d’orientation choisi : CAP ou Bac professionnel.
            </li>
            <li className="flex gap-3">
                <span className="text-[#C57F2E] font-bold">•</span>
                Devenir un citoyen responsable et engagé.
            </li>
            </ul>
        </div>

        {/* Méthode */}
        <div
            className="relative bg-white p-10 rounded-2xl shadow-xl border border-[#C57F2E]/10 overflow-hidden"
            data-aos="fade-up"
        >
            {/* Bandeau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#C57F2E] to-[#a96a24]"></div>

            {/* Titre + icône */}
            <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#C57F2E]/10 flex items-center justify-center text-3xl">
                📚
            </div>
            <h2 className="text-2xl font-bold text-[#C57F2E] tracking-wide">
                Méthode et démarche
            </h2>
            </div>

            {/* Texte */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
                La SEGPA est une structure qui a toute sa place dans le traitement de la grande difficulté scolaire.
                Elle vise la réussite du plus grand nombre d’élèves.
            </p>

            <p>
                Les enseignants spécialisés instaurent un climat de confiance et un contexte pédagogique stimulant.
                Les démarches pédagogiques prennent en compte les difficultés de chaque élève et s’appuient sur ses
                potentialités pour l’aider à construire son projet.
            </p>

            <p className="font-semibold">
                La pédagogie de projet est au cœur du fonctionnement de la SEGPA.
            </p>
            </div>
        </div>

        </section>

        {/* Intro avant les FlipCards */}
        <div 
        className="max-w-4xl mx-auto text-center mt-32 mb-20"
        data-aos="fade-up"
        data-aos-delay="150"
        >
            {/* Ligne décorative */}
            <div className="w-24 h-1 bg-[#1A4C8B] mx-auto mb-6 rounded-full"></div>

            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4C8B] tracking-wide mb-4">
                En résumé
            </h2>

            {/* Sous-titre */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Les points essentiels de la SEGPA présentés de manière claire et visuelle.
                Faites survoler votre souris sur les cartes pour découvrir les éléments clés de la structure, des enseignements,
                des objectifs et de la démarche pédagogique.
            </p>
        </div>


        {/* Cartes de flip */}
        <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 p-12 mt-10 place-items-center"
            data-aos="fade-up">
            <div data-aos="zoom-in" data-aos-delay="100">
                <FlipCardsPrenium
                    icon="🏢"
                    title="Structure spécifique"
                    description="64 élèves maximum, 16 par classe, orientation via CDOEA ou CDAPH."
                />
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
                <FlipCardsPrenium
                    icon="📚"
                    title="Enseignements"
                    description="Enseignements généraux, découverte professionnelle, deux plateaux techniques, stages et immersions."
                />
            </div>

            <div data-aos="zoom-in" data-aos-delay="300">
                <FlipCardsPrenium
                    icon="🎯"
                    title="Objectifs"
                    description="Préparation au CFG, DNB Pro, orientation vers CAP/Bac Pro, citoyenneté."
                />
            </div>

            <div data-aos="zoom-in" data-aos-delay="400">
                <FlipCardsPrenium
                    icon="⚙️"
                    title="Méthode"
                    description="Climat de confiance, pédagogie de projet, accompagnement individualisé."
                />
            </div>

        </div>
      
    </main>
  );

}