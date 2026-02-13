'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, X } from 'lucide-react';

export default function Footer() {


  return (
    <footer className="relative z-10 bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-[#333]">
      <div className="container mx-auto px-4">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-[#333]">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">Máte otázky o našich stavebných službách?</h2>
            <p className="text-gray-400">Kontaktujte nás a my Vám radi poradíme</p>
          </div>
          <div>
            <a href="tel:+421902120001" className="bg-[#c8652b] hover:bg-[#a04e1f] text-white px-8 py-3 rounded uppercase font-semibold transition-colors duration-300 inline-block">
              Zavolať
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase text-[#c8652b]">PS Building s.r.o.</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c8652b] mt-1 shrink-0" />
                <span>Slavkovská 203<br />059 86 Nová Lesná</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c8652b] shrink-0" />
                <a href="tel:+421902120001" className="hover:text-white transition-colors">+421 902 120 001</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c8652b] shrink-0" />
                <a href="mailto:sramcikbuilding@gmail.com" className="hover:text-white transition-colors">sramcikbuilding@gmail.com</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c8652b] shrink-0" />
                <a href="mailto:sramcikpeter@psbuilding.sk" className="hover:text-white transition-colors">sramcikpeter@psbuilding.sk</a>
              </p>
            </div>

            <div className="mt-6">
              <span className="text-gray-400 mr-3">Sledujte nás:</span>
              <a
                href="https://www.facebook.com/PSBuild"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#333] hover:bg-[#3b5998] transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="text-lg font-semibold mb-6 uppercase">Navigácia</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-[#c8652b] transition-colors">Domov</Link></li>
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Služby</Link></li>
                <li><Link href="/galeria/zateplovanie" className="hover:text-[#c8652b] transition-colors">Projekty</Link></li>
                <li><Link href="/prenajom" className="hover:text-[#c8652b] transition-colors">Prenájom</Link></li>
                <li><Link href="/bezpecnostne-dvere" className="hover:text-[#c8652b] transition-colors">Bezpečnostné dvere</Link></li>
                <li><Link href="/kontakt" className="hover:text-[#c8652b] transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 uppercase">Služby</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Dokončovacie stavebné práce</Link></li>
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Zatepľovacie systémy a fasády</Link></li>
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Podlahy a obklady</Link></li>
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Okna, dvere a zasklievanie</Link></li>
                <li><Link href="/#services" className="hover:text-[#c8652b] transition-colors">Sadrokarton a murárske práce</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0 space-x-4">
            <Link href="/ochrana-osobnych-udajov" className="hover:text-white transition-colors underline">Ochrana osobných údajov</Link>
            <button
              onClick={() => {
                const banner = document.getElementById('cookie-settings-trigger');
                if (banner) banner.click();
                // Fallback: If banner not found, we can try to find the modal directly if we had a global state
                // For now, let's assume layout has the banner which has the modal.
              }}
              className="hover:text-white transition-colors underline"
            >
              Nastavenia cookies
            </button>
          </div>
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PS Building s.r.o. Všetky práva vyhradené.
          </div>
          <div>
            Tvorba stránky - <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="text-[#c8652b] hover:underline">AEB Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
