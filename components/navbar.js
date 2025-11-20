// Function to load global navbar
function loadNavbar() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Determine which page is active based on URL
    const isHome = currentPath === '/' || currentPath.includes('index.html');
    const isGaleria = currentPath.includes('galeria') || currentPath === '/galeria';
    const isPrenajom = currentPath.includes('prenajom') || currentPath === '/prenajom';
    const isBezpecnostne = currentPath.includes('bezpecnostne-dvere') || currentPath === '/bezpecnostne-dvere';
    const isKontakt = currentPath.includes('kontakt') || currentPath === '/kontakt';
    
    const navbarHTML = `
    <!-- Navigation -->
    <nav class="navbar navbar-main">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="/" class="logo-link">
                    <span class="logo-text">PS BUILDING</span>
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link${isHome ? ' active' : ''}">Domov</a></li>
                <li><a href="/#services" class="nav-link">Služby</a></li>
                <li><a href="/galeria" class="nav-link${isGaleria ? ' active' : ''}">Projekty</a></li>
                <li><a href="/prenajom" class="nav-link${isPrenajom ? ' active' : ''}">Prenájom</a></li>
                <li><a href="/bezpecnostne-dvere" class="nav-link${isBezpecnostne ? ' active' : ''}">Bezpečnostné dvere</a></li>
                <li><a href="/kontakt" class="nav-link${isKontakt ? ' active' : ''}">Kontakt</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    `;
    
    const navbarContainer = document.getElementById('global-navbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
}