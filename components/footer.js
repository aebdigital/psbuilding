// Function to load global footer
function loadFooter() {
    const footerHTML = `
<!-- Footer -->
<footer id="footer" class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="footer-cta-content">
                <h2 class="footer-cta-title">Máte otázky o našich stavebných službách?</h2>
                <p>Kontaktujte nás a my Vám radi poradíme</p>
            </div>
            <div class="footer-cta-button">
                <a href="tel:+421902120001" class="footer-btn">Zavolať</a>
            </div>
        </div>
        
        <div class="footer-divider"></div>
        
        <div class="footer-content">
            <div class="footer-section footer-contact">
                <h3>PS Building s.r.o.</h3>
                <p>Slavkovská 203<br>059 86 Nová Lesná</p>
                <p><strong>TEL:</strong> <a href="tel:+421902120001">+421 902 120 001</a></p>
                <p><strong>Email:</strong> <a href="mailto:sramcikbuilding@gmail.com">sramcikbuilding@gmail.com</a></p>
                <p><strong>Email:</strong> <a href="mailto:sramcikpeter@psbuilding.sk">sramcikpeter@psbuilding.sk</a></p>
                
                <div style="margin-top: 20px;">
                    <span>Sledujte nás:</span>
                    <a href="https://www.facebook.com/PSBuild" aria-label="Facebook" target="_blank" style="margin-left: 10px; display: inline-flex; align-items: center; vertical-align: middle;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="footer-section footer-navigation">
                <div class="footer-nav-column">
                    <h4>Navigácia</h4>
                    <ul>
                        <li><a href="/">Domov</a></li>
                        <li><a href="/#services">Služby</a></li>
                        <li><a href="/galeria/zateplovanie">Projekty</a></li>
                        <li><a href="/prenajom">Prenájom</a></li>
                        <li><a href="/bezpecnostne-dvere">Bezpečnostné dvere</a></li>
                        <li><a href="/kontakt">Kontakt</a></li>
                    </ul>
                </div>
                <div class="footer-nav-column">
                    <h4>Služby</h4>
                    <ul>
                        <li><a href="/#services">Dokončovacie stavebné práce</a></li>
                        <li><a href="/#services">Zatepľovacie systémy a fasády</a></li>
                        <li><a href="/#services">Podlahy a obklady</a></li>
                        <li><a href="/#services">Okna, dvere a zasklievanie</a></li>
                        <li><a href="/#services">Sadrokarton a murárske práce</a></li>
                    </ul>
                </div>
                <div class="footer-nav-column">
                    <h4>Ochrana osobných údajov</h4>
                    <div class="privacy-link-container">
                        <a href="#" onclick="openPrivacyModal()" class="privacy-link">Zásady ochrany osobných údajov</a>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="footer-bottom">
            <div class="footer-social">
                <p>Tvorba stránky - <a href="https://aebdigital.sk" target="_blank" style="text-decoration: underline;">AEB Digital</a></p>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2024 PS Building s.r.o. Všetky práva vyhradené.</p>
            </div>
        </div>
    </div>
</footer>

<!-- Privacy Policy Modal -->
<div id="privacy-modal" class="privacy-modal">
    <div class="privacy-modal-overlay" onclick="closePrivacyModal()"></div>
    <div class="privacy-modal-container">
        <div class="privacy-modal-content">
        <div class="privacy-modal-header">
            <h2>Zásady ochrany osobných údajov</h2>
            <button class="privacy-modal-close" onclick="closePrivacyModal()">&times;</button>
        </div>
        <div class="privacy-modal-body">
            <p><strong>PS Building, s. r. o.</strong><br>
            Slavkovská 203<br>
            059 86 Nová Lesná<br>
            Slovenská republika<br>
            IČO: 51294672, DIČ: 2120677108<br>
            E-mail: sramcikbuilding@gmail.com<br>
            Tel.: +421 902 120 001</p>
            
            <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>
            
            <h3>I. Kontaktný formulár</h3>
            <p>Na našej webovej stránke prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
            <ul>
                <li>Položiť otázku k našim produktom a službám</li>
                <li>Požiadať o cenovú ponuku</li>
            </ul>
            
            <p><strong>Rozsah spracúvaných údajov:</strong></p>
            <ul>
                <li>Meno a priezvisko</li>
                <li>E-mailová adresa</li>
                <li>Telefónne číslo</li>
                <li>Správu</li>
            </ul>
            
            <p><strong>Účel spracovania:</strong><br>
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
            
            <p><strong>Právny základ:</strong><br>
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
            
            <p><strong>Doba uchovávania:</strong><br>
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
            
            <h3>II. Súbory cookies</h3>
            <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
            <ul>
                <li>Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                <li>Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
            </ul>
            
            <p><strong>Správa súhlasov:</strong><br>
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>
            
            <h3>III. Práva dotknutej osoby</h3>
            <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul>
                <li>Prístup k osobným údajom, ktoré spracúvame</li>
                <li>Oprava nepresných alebo neúplných údajov</li>
                <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                <li>Obmedzenie spracovania</li>
                <li>Prenosnosť údajov</li>
                <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
            </ul>
            
            <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na sramcikbuilding@gmail.com alebo telefónnom čísle +421 902 120 001.</p>
            
            <p>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</p>
        </div>
        </div>
    </div>
</div>
    `;
    
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Privacy modal functions
function openPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}