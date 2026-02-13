'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyContent() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                >
                    <div className="bg-gray-50 p-8 rounded-lg mb-12 border border-gray-100">
                        <p className="font-bold text-xl mb-4 text-black">Prevádzkovateľ:</p>
                        <p>
                            <strong>PS Building, s. r. o.</strong><br />
                            Slavkovská 203<br />
                            059 86 Nová Lesná<br />
                            Slovenská republika<br />
                            IČO: 51294672, DIČ: 2120677108<br />
                            E-mail: sramcikbuilding@gmail.com<br />
                            Tel.: +421 902 120 001
                        </p>
                    </div>

                    <p>Tieto Zásady ochrany osobných údajov (ďalej len "Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-black border-b-2 border-[#c8652b] inline-block">I. Kontaktný formulár</h2>
                    <p>Na našej webovej stránke prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Položiť otázku k našim produktom a službám</li>
                        <li>Požiadať o cenovú ponuku</li>
                    </ul>

                    <p className="mt-6"><strong>Rozsah spracúvaných údajov:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Meno a priezvisko</li>
                        <li>E-mailová adresa</li>
                        <li>Telefónne číslo</li>
                        <li>Obsah správy</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-black border-b-2 border-[#c8652b] inline-block">II. Právny základ a účel</h2>
                    <p>Vaše osobné údaje spracúvame na základe:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Predzmluvné vzťahy:</strong> Spracúvanie je nevyhnutné na vykonanie opatrení pred uzatvorením zmluvy na základe vašej žiadosti (napr. zaslanie cenovej ponuky).</li>
                        <li><strong>Oprávnený záujem:</strong> Zabezpečenie komunikácie so zákazníkmi a odpovedanie na dopyty.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-black border-b-2 border-[#c8652b] inline-block">III. Doba uchovávania</h2>
                    <p>Osobné údaje uchovávame len po dobu nevyhnutnú na vybavenie vašej požiadavky, maximálne po dobu 24 mesiacov, ak nedôjde k uzatvoreniu zmluvy alebo ak osobitný zákon neustanovuje dlhšiu dobu.</p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-black border-b-2 border-[#c8652b] inline-block">IV. Vaše práva</h2>
                    <p>Ako dotknutá osoba máte právo:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Požadovať prístup k vašim osobným údajom</li>
                        <li>Na opravu alebo vymazanie osobných údajov</li>
                        <li>Na obmedzenie spracúvania</li>
                        <li>Namietať proti spracúvaniu</li>
                        <li>Na prenosnosť údajov</li>
                        <li>Podať sťažnosť na Úrade na ochranu osobných údajov SR</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6 text-black border-b-2 border-[#c8652b] inline-block">V. Cookies</h2>
                    <p>Naša stránka používa súbory cookies na zabezpečenie základnej funkčnosti a anonymnú analýzu návštevnosti. Nastavenia cookies môžete kedykoľvek zmeniť prostredníctvom odkazu "Nastavenia cookies" v pätičke stránky.</p>

                    <div className="mt-16 p-8 bg-gray-50 rounded-lg text-sm text-gray-500 italic">
                        Posledná aktualizácia: 13. februára 2026
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
