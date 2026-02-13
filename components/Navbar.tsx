'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.1;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Domov', href: '/' },
    { name: 'Služby', href: '/#services' },
    { name: 'Projekty', href: '/galeria/zateplovanie' }, // Defaulting to one category as per original
    { name: 'Prenájom', href: '/prenajom' },
    { name: 'Bezpečnostné dvere', href: '/bezpecnostne-dvere' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    // Special case for Projects which has sub-routes
    if (path === '/galeria/zateplovanie' && pathname.includes('/galeria/')) return true;
    return false;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled || mobileMenuOpen ? 'bg-black/90 py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50 relative">
          <Link href="/" className="text-white font-bold text-3xl md:text-4xl tracking-tighter hover:opacity-80 transition-opacity drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            PS BUILDING
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  'text-white text-sm uppercase tracking-wide font-medium hover:text-[#c8652b] transition-colors relative group',
                  isActive(link.href) ? 'text-[#c8652b]' : ''
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-0.5 bg-[#c8652b] transition-all duration-300 group-hover:w-full",
                  isActive(link.href) ? "w-full" : ""
                )}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden z-50 cursor-pointer flex flex-col justify-between h-5 w-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={cn("block w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "rotate-45 translate-y-2.5" : "")}></span>
          <span className={cn("block w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "opacity-0" : "")}></span>
          <span className={cn("block w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "-rotate-45 -translate-y-2" : "")}></span>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-black/95 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-white text-xl uppercase tracking-widest font-light hover:text-[#c8652b] transition-colors',
                    isActive(link.href) ? 'text-[#c8652b]' : ''
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
