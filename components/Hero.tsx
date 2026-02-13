'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/sources/IMG_20200508_125444.webp',
  '/sources/IMG_20220601_110810.webp',
  '/sources/IMG_20220712_184252.webp',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden sticky top-0 z-0"
    >
      {/* Background Slider */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[110%]"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase">
              PROFESIONÁLNE STAVEBNÉ SLUŽBY <br />
              <span className="underline underline-offset-8 decoration-white">PS BUILDING</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-light">
              Sme mladá ambiciózna stavebná spoločnosť so skúsenosťami zo zahraničia. Špecializujeme sa na dokončovacie stavebné práce v interiéri a exteriéri s dôrazom na profesionalitu a kvalitu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/galeria/zateplovanie"
                className="bg-[#c8652b] hover:bg-[#a04e1f] text-white px-10 py-4 rounded text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                PROJEKTY
              </Link>
              <Link
                href="#services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                NAŠE SLUŽBY
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden md:flex gap-12 text-white"
          >
            <div className="text-center">
              <div className="text-5xl font-bold mb-1 text-white drop-shadow-md">500<span className="text-[#c8652b]">+</span></div>
              <div className="text-sm uppercase tracking-wider text-gray-200 font-medium">Úspešných projektov</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-1 text-white drop-shadow-md">15</div>
              <div className="text-sm uppercase tracking-wider text-gray-200 font-medium">Rokov skúseností</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
