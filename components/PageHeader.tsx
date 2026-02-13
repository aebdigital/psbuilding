'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image = "/sources/IMG_20200508_125444.webp" }: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={image} className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white text-center shadow-sm">
          {title}
        </h1>
      </motion.div>
    </div>
  );
}
