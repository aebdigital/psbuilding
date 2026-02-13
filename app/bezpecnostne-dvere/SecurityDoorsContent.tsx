'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Shield, CheckCircle } from 'lucide-react';

const categories = [
    {
        title: 'KLASIC - Bezpečnostná trieda 1',
        description: 'Výzor týchto dverí už našepkáva aj ich názov, dvere Klasik majú stály klasický výzor, ktorý výborne ladí v každom domove. Vďaka ukrytým pántom je viac elegantný. Na výber máte 4 farebné prevedenia.',
        images: [
            { src: '/sources/dvere/klassik 1-3.webp', title: 'Krémová biela' },
            { src: '/sources/dvere/klassik 2-4.webp', title: 'Mahagón' },
            { src: '/sources/dvere/klassik 3-4.webp', title: 'Orech' },
            { src: '/sources/dvere/klassik 4-7.webp', title: 'Zlatý dub' },
        ]
    },
    {
        title: 'ELEGANTE - Bezpečnostná trieda 2',
        description: 'Ich vzhľad je úplne novodobý, minimalistický. V ponuke máme štyri farebné prevedenia. Je výborným ochrancom Vášho domova, ak uprednostňujete moderný štýl.',
        images: [
            { src: '/sources/dvere/elegant 1-0.webp', title: 'Antrazit' },
            { src: '/sources/dvere/elegante 2.webp', title: 'Tmavý dub' },
            { src: '/sources/dvere/elegante 3.webp', title: 'Zlatý dub' },
            { src: '/sources/dvere/elegante 4.webp', title: 'Dub šedý' },
        ]
    },
    {
        title: 'TREND - Bezpečnostná trieda 2',
        description: 'Ich vzhľad je oveľa modernejší, minimalistický, dokonale zapadne do moderných bytov, ale vďaka svojej jednoduchosti krásne ladí aj s klasickým štýlom bytov. Na výber máte 4 farebné prevedenia.',
        images: [
            { src: '/sources/dvere/trend p 1-0.webp', title: 'Mahagón' },
            { src: '/sources/dvere/trend p 2.webp', title: 'Zlatý dub' },
            { src: '/sources/dvere/trend p 3.webp', title: 'Orech' },
            { src: '/sources/dvere/trend p 4.webp', title: 'Biela' },
        ]
    }
];

export default function SecurityDoorsContent() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (catIndex: number, imgIndex: number) => {
        setCurrentCategoryIndex(catIndex);
        setCurrentImageIndex(imgIndex);
        setLightboxOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const catImages = categories[currentCategoryIndex].images;
        setCurrentImageIndex((prev) => (prev + 1) % catImages.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const catImages = categories[currentCategoryIndex].images;
        setCurrentImageIndex((prev) => (prev - 1 + catImages.length) % catImages.length);
    };

    const currentImage = categories[currentCategoryIndex].images[currentImageIndex];

    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-3xl font-bold uppercase text-[#c8652b]">Bezpečnostné dvere HISEC</h2>
                                <img src="/sources/dvere/znak.webp" alt="Certifikácia" className="h-16 object-contain" />
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Bezpečnostné dvere HISEC sú vhodné ako vstupné dvere do bytov. Nie sú vhodné do rodinných domov.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Sú dostupné v nadčasovom designe KLASIC a v modernom prevedení TREND a ELEGANTE v rôznych farbách. Kvalita bezpečnostných dverí HISEC je potvrdená slovenským certifikačným úradom Lignotesting a.s., kde boli dvere testované podľa normy STN EN 1627.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-[#c8652b] flex items-center gap-2">
                                        <Shield className="w-5 h-5" /> Bezpečnostné prvky
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <span className="font-bold text-black">01</span> Špeciálna zárubňa z ocele, hrúbka až 170mm
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <span className="font-bold text-black">02</span> Krídlo z oceľovej platne posilnené výstuhou
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <span className="font-bold text-black">03</span> 3 nastaviteľné pánty proti vypáčeniu
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <span className="font-bold text-black">04</span> 15-bodový uzamykací systém
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-[#c8652b] flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" /> Dostupné varianty
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li><strong>KLASIC:</strong> Nadčasový dizajn, trieda 1</li>
                                        <li><strong>TREND:</strong> Moderné prevedenie, trieda 2</li>
                                        <li><strong>ELEGANTE:</strong> Moderné prevedenie, trieda 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold uppercase text-center mb-16">Portfólio</h2>

                    {/* Categories */}
                    <div className="space-y-24">
                        {categories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#c8652b] mb-4 uppercase">{category.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.images.map((img, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md aspect-[3/5]"
                                            onClick={() => openLightbox(catIndex, imgIndex)}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <h4 className="text-white font-bold text-xl uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <div className="relative max-w-full max-h-[90vh]">
                            <motion.img
                                key={`${currentCategoryIndex}-${currentImageIndex}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                src={currentImage.src}
                                alt={currentImage.title}
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl mx-auto"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <p className="text-white text-center mt-4 text-lg font-medium">{currentImage.title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
