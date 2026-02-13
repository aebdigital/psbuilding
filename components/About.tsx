'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'; // Icons for stats

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-6">
              <span className="text-[#c8652b] font-semibold tracking-wider uppercase text-sm">— Kto sme</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 uppercase">O NÁS</h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">
                Spoločnosť PS-Building je mladá ambiciózna stavebná spoločnosť so skúsenosťami zo zahraničia, ktorá na Slovenskom stavebnom trhu vznikla 2018. Spoločnosť sa na stavebnom trhu zameriava hlavne na profesionalitu práce, či už ide o malé, stredne ale aj veľké projekty.
              </p>
              <p className="mb-4">
                Mnohý naši klienti sa už o tom presvedčili, či už pri zateplení domu, revitalizácii bytového domu a mnohých bytových alebo nebytových priestorov. Poskytujeme služby od vizualizácie až po konečne úpravy.
              </p>
              <p>
                K naším zásadám patrí dodržanie schváleného rozpočtu, časového rozhrania a technických noriem a samozrejme dodržanie bezpečnosť pri práci, čo sa nám do dnešného dňa darí. Môžete sa o tom sami presvedčiť.
              </p>
            </div>

            <Link
              href="#footer"
              className="group inline-flex items-center text-[#c8652b] font-semibold text-lg hover:text-[#a04e1f] transition-colors"
            >
              Kontaktovať nás
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/sources/IMG_20240306_134520.webp"
                alt="PS Building Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Box 1 - Black */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-10 -left-4 md:left-10 bg-[#1a1a1a] text-white p-6 md:p-8 rounded shadow-xl z-20 flex items-center gap-4 min-w-[200px]"
            >
              <div className="bg-[#333] p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-[#c8652b]" />
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-xs uppercase text-gray-400">Úspešných projektov</div>
              </div>
            </motion.div>

            {/* Floating Stat Box 2 - Yellow/Orange */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:flex absolute -top-10 -right-4 bg-[#c8652b] text-white p-6 md:p-8 rounded shadow-xl z-20 items-center gap-4 min-w-[200px]"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold">15</div>
                <div className="text-xs uppercase text-white/80">Rokov skúseností</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
