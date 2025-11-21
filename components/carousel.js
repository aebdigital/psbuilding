// Services carousel functionality
function initializeCarousel() {
    let currentSlide = 0;
    const carousel = document.querySelector('.services-carousel');
    const cards = document.querySelectorAll('.services-carousel .service-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (carousel && cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 40; // card width + gap
        const isMobile = window.innerWidth <= 768;
        const maxSlides = isMobile ? Math.max(0, cards.length - 1) : Math.max(0, cards.length - 3); // Mobile: show 1 card at a time, Desktop: 3 cards
        
        function updateCarousel() {
            const translateX = -(currentSlide * cardWidth);
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlides;
        }
        
        function nextSlide() {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardWidth = cards[0].offsetWidth + 40;
            if (newCardWidth !== cardWidth) {
                location.reload(); // Simple solution for responsive updates
            }
        });
    }

    // Service button click handlers - navigate to gallery category pages
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.service-card');
            const link = serviceCard.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
}