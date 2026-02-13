'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CookieSettingsModal, { CookieSettings } from './CookieSettingsModal';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSettings, setCurrentSettings] = useState<CookieSettings | undefined>();

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Delay visibility for better UX
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        } else {
            setCurrentSettings(JSON.parse(consent));
        }
    }, []);

    const handleAcceptAll = () => {
        const settings = { necessary: true, analytics: true, marketing: true };
        localStorage.setItem('cookie-consent', JSON.stringify(settings));
        setCurrentSettings(settings);
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        const settings = { necessary: true, analytics: false, marketing: false };
        localStorage.setItem('cookie-consent', JSON.stringify(settings));
        setCurrentSettings(settings);
        setIsVisible(false);
    };

    const handleSaveSettings = (settings: CookieSettings) => {
        localStorage.setItem('cookie-consent', JSON.stringify(settings));
        setCurrentSettings(settings);
        setIsVisible(false);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 w-full z-[90] p-4 md:p-6"
                    >
                        <div className="container mx-auto max-w-6xl">
                            <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">Používame Cookies 🍪</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                        Súbory cookie používame na zabezpečenie základnej funkčnosti webu, personalizáciu obsahu a analýzu návštevnosti. Kliknutím na "Prijať všetky" súhlasíte s ich používaním.
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-3 shrink-0">
                                    <button
                                        id="cookie-settings-trigger"
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-2.5 rounded border border-gray-300 font-bold uppercase text-xs hover:bg-gray-50 transition-colors"
                                    >
                                        Nastavenia
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-6 py-2.5 rounded border border-gray-300 font-bold uppercase text-xs hover:bg-gray-50 transition-colors"
                                    >
                                        Odmietnuť
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-8 py-2.5 rounded bg-[#c8652b] text-white font-bold uppercase text-xs hover:bg-[#a04e1f] transition-all transform hover:scale-105"
                                    >
                                        Prijať všetky
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CookieSettingsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveSettings}
                initialSettings={currentSettings}
            />
        </>
    );
}
