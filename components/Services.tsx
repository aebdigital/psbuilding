'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Zatepľovacie systémy',
    description: 'Profesionálne zatepľovanie budov, aplikácia kontaktných zatepľovacích systémov, fasádne omietky a energetické úspory pre vašu nehnuteľnosť.',
    link: '/galeria/zateplovanie',
    image: '/sources/zateplovacie/IMG_20221011_114806.webp',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M30 5L25 10H15v40h30V10H35L30 5zM40 45H20V15h5l5-5 5 5h5v30z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Obklady a Dlažby',
    description: 'Pokládka keramických obkladov a dlažieb pre interiér i exteriér. Precízne vyhotovenie s dlhoročnou zárukou a použitím kvalitných materiálov.',
    link: '/galeria/obklady-dlazby',
    image: '/sources/obklady-dlazby/IMG_20221011_114550.jpeg',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M5 5h20v20H5V5zm30 0h20v20H35V5zM5 35h20v20H5V35zm30 0h20v20H35V35z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Maliarske práce AIRLESS',
    description: 'Moderné maliarske práce s použitím AIRLESS technológie. Rovnomerné pokrytie, rýchla aplikácia a profesionálny vzhľad pre interiér aj exteriér.',
    link: '/galeria/maliarske-prace',
    image: '/sources/maliarske-prace/IMG_20210708_150539.webp',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M20 45h20l-5-15h-10l-5 15zm-5-20c2.5 0 4.5-2 4.5-4.5S17.5 16 15 16s-4.5 2-4.5 4.5S12.5 25 15 25zm30 0c2.5 0 4.5-2 4.5-4.5S47.5 16 45 16s-4.5 2-4.5 4.5S42.5 25 45 25zM30 5L15 15v10l15-10 15 10V15L30 5z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Sadrokartonové systémy',
    description: 'Montáž sadrokartonových konštrukcií, priečky, podhlady, designové prvky. Rýchle a čisté riešenia pre moderné interiéry.',
    link: '/galeria/sadrokarton',
    image: '/sources/sadrokarton/IMG_20190214_093535.webp',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M5 10h50v5H5v-5zm0 35h50v5H5v-5zM10 25h40v10H10V25zm5-10v30h30V15H15z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Murárske práce',
    description: 'Klasické murárske práce, stavba stien, komínov, arkárov. Odborné vyhotovenie s použitím tradičných i moderných stavebných techník.',
    link: '/galeria/murarske-prace',
    image: '/sources/murarske/IMG_20201119_110044.webp',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M5 45h50v5H5v-5zm0-10h50v5H5v-5zm0-10h50v5H5v-5zm0-10h50v5H5v-5zm0-10h50v5H5V5z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Kamenná dlažba',
    description: 'Pokládka prírodnej kamennej dlažby pre terasy, chodníky a exteriéry. Trvanlivé riešenia s prirodzenou krásou prírodného kameňa.',
    link: '/galeria/kamenna-dlazba',
    image: '/sources/kamenna-dlazba/IMG_20220406_115842.webp',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#c8652b] group-hover:text-white">
        <path d="M30 5L5 15v30l25 10 25-10V15L30 5zM50 42L30 50 10 42V18l20-8 20 8v24z" fill="currentColor" />
      </svg>
    )
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">NAŠE SLUŽBY</h2>
            <div className="w-20 h-1 bg-[#c8652b]"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="relative bg-white p-8 h-full shadow-lg hover:shadow-2xl group border-b-4 border-transparent hover:border-[#c8652b] overflow-hidden">
                {/* Hover Background Image */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-105 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-4 text-black group-hover:text-white">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-200 mb-8 line-clamp-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-block text-[#c8652b] group-hover:text-white font-semibold uppercase tracking-wider text-sm border-b border-[#c8652b] group-hover:border-white pb-1 hover:text-[#a04e1f]"
                  >
                    Zobraziť viac
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}