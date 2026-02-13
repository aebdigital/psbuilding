'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-bold uppercase mb-6">Napíšte nám</h2>

                        {formStatus === 'success' ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
                                <strong className="font-bold">Ďakujeme!</strong>
                                <span className="block sm:inline"> Vaša správa bola úspešne odoslaná.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Meno *</label>
                                        <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#c8652b] focus:border-[#c8652b] outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#c8652b] focus:border-[#c8652b] outline-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefón</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#c8652b] focus:border-[#c8652b] outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Predmet</label>
                                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#c8652b] focus:border-[#c8652b] outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Správa *</label>
                                    <textarea id="message" rows={6} required className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#c8652b] focus:border-[#c8652b] outline-none transition-colors"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-[#c8652b] text-white font-bold py-3 px-4 rounded hover:bg-[#a04e1f] transition-colors disabled:opacity-50"
                                >
                                    {formStatus === 'submitting' ? 'Odosiela sa...' : 'Odoslať správu'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-gray-100 p-3 rounded-full text-[#c8652b]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Adresa</h3>
                                <p className="text-gray-600">Slavkovská 203<br />059 86 Nová Lesná<br />Slovenská republika</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-gray-100 p-3 rounded-full text-[#c8652b]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Telefón</h3>
                                <p className="text-gray-600">
                                    <a href="tel:+421902120001" className="hover:text-[#c8652b] transition-colors">+421 902 120 001</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-gray-100 p-3 rounded-full text-[#c8652b]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:sramcikbuilding@gmail.com" className="hover:text-[#c8652b] transition-colors block">sramcikbuilding@gmail.com</a>
                                    <a href="mailto:sramcikpeter@psbuilding.sk" className="hover:text-[#c8652b] transition-colors block">sramcikpeter@psbuilding.sk</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-gray-100 p-3 rounded-full text-[#c8652b]">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Pracovné hodiny</h3>
                                <p className="text-gray-600">Pondelok – Piatok<br />09:00 – 16:00</p>
                            </div>
                        </div>

                        <div className="bg-[#1a1a1a] text-white p-6 rounded-lg shadow-lg mt-8">
                            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Fakturačné údaje</h3>
                            <div className="space-y-2 text-gray-300">
                                <p><strong>PS Building s.r.o.</strong></p>
                                <p><strong>IČO:</strong> 51294672</p>
                                <p><strong>DIČ:</strong> 2120677108</p>
                                <p><strong>Sídlo:</strong> Slavkovská 203, 059 86 Nová Lesná</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
