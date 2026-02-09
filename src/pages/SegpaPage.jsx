import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

import FlipCards from '../components/flipCards';


export default function SegpaPage() {

    const images = [
    "/assets/segpa/S.webp",
    "/assets/segpa/PhotoSegpa1.webp",
    "/assets/segpa/PhotoSegpa2.webp",

    ];

    return (
        <main className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-6 md:px-12">
        {/* Titre centré */}
        <div className="flex justify-center mb-20">
            <div className="px-10 py-4 rounded-lg shadow-lg bg-[#1A4C8B] border-l-8 border-[#C57F2E]">
                <h1 className="text-3xl md:text-4xl font-bold text-[#FAF7F2] tracking-wide">
                Section SEGPA
                </h1>
            </div>
        </div>

        {/* Grille responsive */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Texte */}
            <div>
            <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                La SEGPA (Section d’Enseignement Général et Professionnel adapté) accueille des élèves
                présentant des difficultés scolaires graves et persistantes auxquelles n’ont pu remédier
                les actions de prévention, d’aide et de soutien.
            </p>
            </div>

            {/* Swiper */}
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px]">
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

        {/* Section d'informations */}
        <section className="max-w-5xl mx-auto mt-24 space-y-16">

        {/* Introduction */}
        <div className="bg-[#FAF7F2] p-8 rounded-xl shadow-md border-l-4 border-[#1A4C8B]">
            <h2 className="text-2xl font-bold text-[#1A4C8B] mb-4">Une structure spécifique</h2>
            <p className="text-gray-700 leading-relaxed">
            La SEGPA (Section d’Enseignement Général et Professionnel Adapté) accueille des élèves
            présentant des difficultés scolaires graves et persistantes auxquelles n’ont pu remédier
            les actions de prévention, d’aide et de soutien.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
            Elle scolarise maximum 64 élèves, soit 16 élèves par classe de la sixième à la troisième,
            orientés par la CDOEA ou sur décision de la CDAPH.
            </p>
        </div>

        {/* Enseignements */}
        <div className="bg-[#FAF7F2] p-10 rounded-xl shadow-md border-l-4 border-[#C57F2E]">
            <h2 className="text-2xl font-bold text-[#C57F2E] mb-4">Les enseignements proposés</h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
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
        <div className="bg-[#FAF7F2] p-10 rounded-xl shadow-md border-l-4 border-[#1A4C8B]">
            <h2 className="text-2xl font-bold text-[#1A4C8B] mb-4">Les objectifs de la SEGPA</h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
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
        <div className="bg-[#FAF7F2] p-10 rounded-xl shadow-md border-l-4 border-[#C57F2E]">
            <h2 className="text-2xl font-bold text-[#C57F2E] mb-4">Méthode et démarche</h2>

            <p className="text-gray-700 leading-relaxed">
            La SEGPA est une structure qui a toute sa place dans le traitement de la grande difficulté scolaire.
            Elle vise la réussite du plus grand nombre d’élèves.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
            Les enseignants spécialisés instaurent un climat de confiance et un contexte pédagogique stimulant.
            Les démarches pédagogiques prennent en compte les difficultés de chaque élève et s’appuient sur ses
            potentialités pour l’aider à construire son projet.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
            La pédagogie de projet est au cœur du fonctionnement de la SEGPA.
            </p>
        </div>

        </section>




        {/* Cartes de flip */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 p-12 mt-10">

            <FlipCards
                frontColor="#1A4C8B"
                backColor="#C57F2E"
                title="Structure spécifique"
                description="64 élèves maximum, 16 par classe, orientation via CDOEA ou CDAPH."
            />

            <FlipCards
                frontColor="#1A4C8B"
                backColor="#C57F2E"
                title="Enseignements"
                description="Enseignements généraux, découverte professionnelle, deux plateaux techniques, stages et immersions."
            />

            <FlipCards
                frontColor="#1A4C8B"
                backColor="#C57F2E"
                title="Objectifs"
                description="Préparation au CFG, DNB Pro, orientation vers CAP/Bac Pro, citoyenneté."
            />

            <FlipCards
                frontColor="#1A4C8B"
                backColor="#C57F2E"
                title="Méthode"
                description="Climat de confiance, pédagogie de projet, accompagnement individualisé."
            />

        </div>
      
    </main>
  );

}