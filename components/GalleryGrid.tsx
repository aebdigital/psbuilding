'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryGridProps {
  title: string;
  images: string[];
}

const categories = [
  { name: 'Zatepľovacie systémy', slug: 'zateplovanie' },
  { name: 'Obklady a Dlažby', slug: 'obklady-dlazby' },
  { name: 'Maliarske práce AIRLESS', slug: 'maliarske-prace' },
  { name: 'Sadrokartonové systémy', slug: 'sadrokarton' },
  { name: 'Murárske práce', slug: 'murarske-prace' },
  { name: 'Kamenná dlažba', slug: 'kamenna-dlazba' },
  { name: 'Iné práce', slug: 'ine-prace' },
];

export default function GalleryGrid({ title, images }: GalleryGridProps) {
  const pathname = usePathname();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle body scroll lock
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Mobile Filter */}
        <div className="lg:hidden mb-8">
          <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">Vyberte kategóriu:</label>
          <select
            id="category-select"
            className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8652b] focus:border-[#c8652b]"
            onChange={(e) => window.location.href = `/galeria/${e.target.value}`}
            value={pathname?.split('/').pop() || ''}
          >
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-32">
              <h3 className="text-xl font-bold uppercase mb-6 pb-4 border-b">Kategórie projektov</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/galeria/${cat.slug}`}
                      className={`block px-4 py-2 rounded transition-colors ${pathname?.includes(cat.slug) ? 'bg-[#c8652b] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#c8652b]'}`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-3xl font-bold uppercase text-[#c8652b]">{title}</h2>
            </div>

            {images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
                    className="aspect-square relative overflow-hidden rounded-lg shadow-md cursor-pointer group bg-gray-200"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      alt={`${title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500">
                <p>V tejto kategórii sa zatiaľ nenachádzajú žiadne fotografie.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 md:p-3 bg-black/30 hover:bg-[#c8652b] backdrop-blur-sm rounded-full transition-all duration-300 z-50 group"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 md:p-3 bg-black/30 hover:bg-[#c8652b] backdrop-blur-sm rounded-full transition-all duration-300 z-50 group"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[currentIndex]}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            <div className="absolute bottom-4 left-0 w-full text-center text-white/70 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}