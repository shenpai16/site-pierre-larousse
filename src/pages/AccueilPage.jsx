import HeroSwiper from "../components/heroSwiper";
import FlipCards from "../components/FlipCards";
import InstagramFeed from "../components/InstagramFeed";

export default function AccueilPage() {
  return (
    <main className="w-full bg-[#F9FAFB]">

    {/* Hero */}
    <HeroSwiper />

    {/* Titre */}
    <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1A4C8B] mb-6">
            Un établissement engagé pour la réussite de tous
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Le Lycée Pierre Larousse accueille chaque année des élèves aux parcours variés
            et les accompagne vers la réussite scolaire, personnelle et professionnelle.
            Notre établissement propose un cadre bienveillant, moderne et ouvert sur le monde.
        </p>
    </section>

    {/* Nos sections / filieres */}
    <section className="max-w-6xl mx-auto mt-28 mb-28 px-6">
        <div className="w-20 h-1 bg-[#1A4C8B] mx-auto mb-12 rounded-full"></div>
        <h2 className="text-3xl font-bold text-[#C57F2E] text-center mb-12">
            Nos sections
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 py-10 place-items-center max-w-4xl mx-auto">

            <FlipCards frontColor="#1A4C8B" backColor="#C57F2E" title="SEGPA" description="Un accompagnement adapté pour la réussite de chacun." />
            <FlipCards frontColor="#1A4C8B" backColor="#C57F2E" title="Voie générale" description="Un enseignement complet pour préparer l’avenir." />
            <FlipCards frontColor="#1A4C8B" backColor="#C57F2E" title="Voie professionnelle" description="Des formations concrètes et professionnalisantes." />
            <FlipCards frontColor="#1A4C8B" backColor="#C57F2E" title="Options" description="Théâtre, langues, sport… développez vos talents." />
        </div>
    </section>     

    {/* Les valeurs du lycée */}
    <section className="max-w-6xl mx-auto mt-32 mb-28 px-6">
        <div className="w-20 h-1 bg-[#C57F2E] mx-auto mb-12 rounded-full"></div>
        <h2 className="text-3xl font-bold text-[#1A4C8B] text-center mb-16">
            Nos valeurs
        </h2>

        <div className="grid md:grid-cols-3 gap-14 text-center">

            <div className="p-10 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-[#1A4C8B]/20 hover:shadow-2xl transition duration-300">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A4C8B]">Bienveillance</h3>
                <p className="text-gray-700 leading-relaxed">
                    Un climat serein et respectueux pour favoriser l’apprentissage.
                </p>
            </div>

            <div className="p-10 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-[#1A4C8B]/20 hover:shadow-2xl transition duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A4C8B]">Exigence</h3>
                <p className="text-gray-700 leading-relaxed">
                    Un accompagnement rigoureux pour atteindre le meilleur niveau.
                </p>
            </div>

            <div className="p-10 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-[#1A4C8B]/20 hover:shadow-2xl transition duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A4C8B]">Ouverture</h3>
                <p className="text-gray-700 leading-relaxed">
                    Des projets culturels, sportifs et professionnels variés.
                </p>
            </div>
        </div>
    </section>

    {/* Actualités du lycée */}
    <section className="max-w-6xl mx-auto mt-32 mb-28 px-6">
        <div className="w-20 h-1 bg-[#1A4C8B] mx-auto mb-12 rounded-full"></div>
        <h2 className="text-3xl font-bold text-[#C57F2E] text-center mb-16">
            Actualités
        </h2>

        <div className="grid md:grid-cols-3 gap-14">

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#1A4C8B] hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-3 text-[#1A4C8B]">Portes ouvertes 2025</h3>
            <p className="text-gray-700 leading-relaxed">
                Découvrez nos formations et rencontrez l’équipe éducative.
            </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#C57F2E] hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-3 text-[#1A4C8B]">Voyage scolaire</h3>
            <p className="text-gray-700 leading-relaxed">
                Les élèves de seconde partent à Londres en avril.
            </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#1A4C8B] hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-xl mb-3 text-[#1A4C8B]">Résultats du DNB</h3>
            <p className="text-gray-700 leading-relaxed">
                Félicitations à nos élèves pour leurs excellents résultats.
            </p>
            </div>

        </div>
    </section>

    {/* Compte instagram a rajouter */}
    <InstagramFeed />

    {/* CTA Final */}

    <section className="
    mt-32 py-20 
    bg-gradient-to-b from-[#1A4C8B] to-[#0f2f5c] 
    text-center text-white 
    animate-fadeIn
    ">
        <div className="w-20 h-1 bg-[#C57F2E] mx-auto mb-8 rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            Envie d’en savoir plus ?
        </h2>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous ou venez visiter le lycée.
        </p>

        <a
            href="/contact"
            className="
            px-10 py-4 
            bg-[#C57F2E] 
            text-white font-bold 
            rounded-xl shadow-lg 
            hover:bg-[#a96a24] 
            transition transform hover:scale-105
            "
        >
            Nous contacter
        </a>
    </section>

    </main>
  );
}