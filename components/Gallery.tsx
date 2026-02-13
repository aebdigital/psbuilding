'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: '/sources/IMG_20200508_125444.webp',
    category: 'Zatepľovacie systémy',
    link: '/galeria/zateplovanie'
  },
  {
    image: '/sources/IMG_20220601_110810.webp',
    category: 'Obklady a Dlažby',
    link: '/galeria/obklady-dlazby'
  },
  {
    image: '/sources/IMG_20220712_184252.webp',
    category: 'Obklady a Dlažby',
    link: '/galeria/obklady-dlazby'
  },
  {
    image: '/sources/IMG_20221011_114606.webp',
    category: 'Obklady a Dlažby',
    link: '/galeria/obklady-dlazby'
  },
  {
    image: '/sources/IMG_20240306_134520.webp',
    category: 'Zatepľovacie systémy',
    link: '/galeria/zateplovanie'
  },
  {
    image: '/sources/IMG_20241028_130002.webp',
    category: 'Zatepľovacie systémy',
    link: '/galeria/zateplovanie'
  },
  {
    image: '/sources/IMG_20241125_151803.webp',
    category: 'Zatepľovacie systémy',
    link: '/galeria/zateplovanie'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-10 py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-12 text-center">NAŠE PROJEKTY</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 overflow-hidden cursor-pointer"
            >
              <Link href={project.link} className="block w-full h-full">
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold uppercase text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </h3>
                </div>
              </Link>
            </div>
          ))}

          {/* "All Projects" Link Block */}
          <div className="bg-[#1a1a1a] h-80 flex items-center justify-center group cursor-pointer hover:bg-[#c8652b] transition-colors duration-300">
            <Link href="/galeria/zateplovanie" className="flex flex-col items-center text-white">
              <h3 className="text-xl font-bold uppercase mb-4">Všetky projekty</h3>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#c8652b] transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
