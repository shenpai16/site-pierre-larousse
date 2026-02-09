import { useEffect } from "react";

export default function InstagramFeed(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="max-w-6xl mx-auto mt-32 px-6 text-center">
            <div className="w-20 h-1 bg-[#C57F2E] mx-auto mb-12 rounded-full"></div>
            <h2 className="text-3xl font-bold text-[#1A4C8B] mb-12 tracking-wide">
                Notre compte Instagram
            </h2>
            

            <div className="flex justify-center bg-black py-10 px-4 rounded-2xl shadow-xl border-4 border-[#1A4C8B]">
                <iframe
                src="//lightwidget.com/widgets/d95dfb88779a52418af1260af4ec347e.html"
                className="lightwidget-widget w-full max-w-4xl h-[600px] border-0 overflow-hidden rounded-xl shadow-lg"
                scrolling="no"
                allowTransparency="true"
                ></iframe>
            </div>
        </section>
    );
}