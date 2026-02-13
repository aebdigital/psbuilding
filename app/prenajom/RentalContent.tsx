'use client';

import Link from 'next/link';
import { Check, Euro, Zap, Wrench } from 'lucide-react';

const rentalItems = [
    {
        title: 'METABO KGS 216 M + KSU 251',
        subtitle: 'Pokosová píla 1700W so stojanom',
        description: 'Poskytujeme služby od návrhov až po finálnu realizáciu prác. Profesionálne náranie pre presné rezy.',
        image: '/sources/prenajom/METABO.webp',
    },
    {
        title: 'Prenájom lešenia',
        subtitle: 'Bezpečné a stabilné riešenia',
        description: 'Rôzne povrchy si žiadajú rozlične riešenia. Profesionálne lešenie pre všetky typy prác.',
        image: '/sources/prenajom/lesenie.webp',
    },
    {
        title: 'Zdvíhač sadrokartónových dosiek',
        subtitle: 'Efektívne riešenie pre montáž',
        description: 'Od návrhu k realizáciám. Uľahčuje a zrýchľuje montáž sadrokartónových systémov.',
        image: '/sources/prenajom/zdvihac.webp',
    },
    {
        title: 'Prenájom prívesného vozíka',
        subtitle: 'Flexibilné dopravné riešenia',
        description: 'Bez vodiča a s vodičom. Preprava materiálu a náradia na stavby.',
        image: '/sources/prenajom/vozik.webp',
    },
    {
        title: 'Striekacie zariadenie AIRLESS',
        subtitle: 'Profesionálne maliarske práce',
        description: 'Interiér a Exteriér. Moderná technológia pre kvalitné a rýchle maľovanie.',
        image: '/sources/prenajom/striekacie zariadenie.webp',
    },
];

export default function RentalContent() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-[#c8652b]">Naše prenájomové služby</h2>
                    <p className="text-gray-600 text-lg">
                        PS Building ponúka komplexné prenájomové služby pre stavebné projekty. Moderné a udržiavané zariadenia s profesionálnou podporou.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rentalItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                            <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <h4 className="text-[#c8652b] font-medium text-sm uppercase mb-4">{item.subtitle}</h4>
                                <p className="text-gray-600 mb-6 flex-1">{item.description}</p>
                                <Link
                                    href="/kontakt"
                                    className="block text-center bg-[#1a1a1a] text-white py-3 rounded hover:bg-[#c8652b] transition-colors font-semibold"
                                >
                                    Mám záujem
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold uppercase text-center mb-12">Prečo si vybrať nás?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#c8652b]">
                                <Check className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2">Moderné zariadenia</h4>
                            <p className="text-gray-500 text-sm">Udržiavané a spoľahlivé</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#c8652b]">
                                <Euro className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2">Konkurenčné ceny</h4>
                            <p className="text-gray-500 text-sm">Výhodné cenové podmienky</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#c8652b]">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2">Rýchla dostupnosť</h4>
                            <p className="text-gray-500 text-sm">Okamžité riešenia</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#c8652b]">
                                <Wrench className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2">Technická podpora</h4>
                            <p className="text-gray-500 text-sm">Odborné poradenstvo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
