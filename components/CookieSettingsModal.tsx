'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShieldCheck, BarChart3, Target } from 'lucide-react';

interface CookieSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (settings: CookieSettings) => void;
    initialSettings?: CookieSettings;
}

export interface CookieSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function CookieSettingsModal({ isOpen, onClose, onSave, initialSettings }: CookieSettingsModalProps) {
    const [settings, setSettings] = useState<CookieSettings>(initialSettings || {
        necessary: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        if (initialSettings) {
            setSettings(initialSettings);
        }
    }, [initialSettings, isOpen]);

    const handleToggle = (key: keyof CookieSettings) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        onSave(settings);
        onClose();
    };

    const handleAcceptAll = () => {
        const allOn = { necessary: true, analytics: true, marketing: true };
        setSettings(allOn);
        onSave(allOn);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white text-black rounded-lg max-w-xl w-full shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                            <h2 className="text-xl font-bold uppercase flex items-center gap-3">
                                <ShieldCheck className="text-[#c8652b]" />
                                Nastavenia súborov Cookies
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-6">
                            <p className="text-gray-600 text-sm italic">
                                Súbory cookie používame na zlepšenie vášho zážitku z prehliadania a analýzu návštevnosti. Vyberte si, ktoré kategórie chcete povoliť.
                            </p>

                            <div className="space-y-4">
                                {/* Necessary */}
                                <div className="flex items-start justify-between p-4 border rounded-lg bg-gray-50/50">
                                    <div className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-sm uppercase">Nevyhnutné (Vždy aktívne)</h3>
                                            <p className="text-xs text-gray-500">Tieto cookies sú potrebné pre fungovanie webovej stránky a nemožno ich vypnúť.</p>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <div className="w-12 h-6 bg-[#c8652b] rounded-full relative opacity-50 cursor-not-allowed">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                                <Check className="w-3 h-3 text-[#c8652b]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analytics */}
                                <div
                                    className="flex items-start justify-between p-4 border rounded-lg hover:border-[#c8652b] transition-colors cursor-pointer"
                                    onClick={() => handleToggle('analytics')}
                                >
                                    <div className="flex gap-4">
                                        <BarChart3 className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-sm uppercase">Analytické</h3>
                                            <p className="text-xs text-gray-500">Umožňujú nám sledovať návštevnosť a zdroje, aby sme mohli merať a zlepšovať výkon našej stránky.</p>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <div className={cn(
                                            "w-12 h-6 rounded-full relative transition-colors duration-300",
                                            settings.analytics ? "bg-[#c8652b]" : "bg-gray-300"
                                        )}>
                                            <div className={cn(
                                                "absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300",
                                                settings.analytics ? "right-1" : "left-1"
                                            )} />
                                        </div>
                                    </div>
                                </div>

                                {/* Marketing */}
                                <div
                                    className="flex items-start justify-between p-4 border rounded-lg hover:border-[#c8652b] transition-colors cursor-pointer"
                                    onClick={() => handleToggle('marketing')}
                                >
                                    <div className="flex gap-4">
                                        <Target className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-sm uppercase">Marketingové</h3>
                                            <p className="text-xs text-gray-500">Tieto cookies sa používajú na sledovanie návštevníkov na webových stránkach a zobrazovanie relevantnej reklamy.</p>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <div className={cn(
                                            "w-12 h-6 rounded-full relative transition-colors duration-300",
                                            settings.marketing ? "bg-[#c8652b]" : "bg-gray-300"
                                        )}>
                                            <div className={cn(
                                                "absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300",
                                                settings.marketing ? "right-1" : "left-1"
                                            )} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-gray-50 border-top flex flex-col md:flex-row gap-4">
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 bg-black text-white py-3 rounded font-bold uppercase hover:bg-gray-800 transition-colors text-sm"
                            >
                                Povoliť všetky
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 bg-[#c8652b] text-white py-3 rounded font-bold uppercase hover:bg-[#a04e1f] transition-colors text-sm"
                            >
                                Uložiť výber
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

// Simple Helper for classes
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}
