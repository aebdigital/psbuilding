// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load global navbar and footer
    loadNavbar();
    loadFooter();
    
    // Initialize other functionality after navbar and footer are loaded
    setTimeout(initializeApp, 100);
});

// Initialize all app functionality
function initializeApp() {
    // Mobile Navigation
    const hamburgers = document.querySelectorAll('.hamburger');
    const navMenus = document.querySelectorAll('.nav-menu');

    hamburgers.forEach((hamburger, index) => {
        hamburger.addEventListener('click', function() {
            // Always toggle menu and hamburger state immediately
            navMenus[index].classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Check the new state after toggle and pass it directly
            const isNowActive = hamburger.classList.contains('active');
            updateNavbarBasedOnState(isNowActive);
        });
    });

    // Function to update navbar based on scroll position
    function updateNavbarBasedOnState(hamburgerActive = null) {
        const scrollPosition = window.scrollY;
        const currentPage = window.location.pathname;
        let triggerPoint;
        
        // Use consistent 30vh trigger point for all pages
        triggerPoint = window.innerHeight * 0.3; // 30vh
        
        // Use passed state or check DOM state
        let isHamburgerActive;
        if (hamburgerActive !== null) {
            isHamburgerActive = hamburgerActive;
        } else {
            isHamburgerActive = Array.from(hamburgers).some(hamburger => hamburger.classList.contains('active'));
        }
        
        // Get the main navbar
        const mainNavbar = document.querySelector('.navbar-main');
        
        if (scrollPosition > triggerPoint || isHamburgerActive) {
            // Below trigger point or hamburger active - show dark navbar
            if (mainNavbar) {
                mainNavbar.classList.add('scrolled');
            }
        } else {
            // In hero section and hamburger not active - show transparent navbar
            if (mainNavbar) {
                mainNavbar.classList.remove('scrolled');
            }
        }
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenus.forEach(menu => menu.classList.remove('active'));
            hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
            
            // Update navbar based on new state (hamburger is now inactive)
            updateNavbarBasedOnState(false);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar based on current state (check DOM for scroll events)
        updateNavbarBasedOnState();
    });

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                alert('Ďakujeme za prihlásenie k odberu!');
                this.reset();
            } else {
                alert('Prosím, zadajte váš email.');
            }
        });
    }

    // Initialize components
    if (typeof initializeCarousel === 'function') {
        initializeCarousel();
    }
    
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePrivacyModal();
    }
});