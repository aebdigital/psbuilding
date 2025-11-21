// Gallery Lightbox functionality
function initializeLightbox() {
    // Create lightbox HTML structure
    const lightboxHTML = `
        <div class="gallery-lightbox" id="gallery-lightbox">
            <div class="lightbox-content">
                <img class="lightbox-image" id="lightbox-image" src="" alt="Gallery Image">
            </div>
            
            <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            
            <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
    
    // Add lightbox to body
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Get lightbox elements
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    // Get all gallery images
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const images = Array.from(galleryLinks).map(link => ({
        src: link.href,
        alt: link.querySelector('img')?.alt || 'Gallery Image'
    }));
    
    let currentIndex = 0;
    
    // Show lightbox
    function showLightbox(index) {
        currentIndex = index;
        const image = images[currentIndex];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        updateNavButtons();
    }
    
    // Hide lightbox
    function hideLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImage.src = '';
    }
    
    // Update navigation buttons
    function updateNavButtons() {
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);
    }
    
    // Show previous image
    function showPrevImage() {
        if (currentIndex > 0) {
            showLightbox(currentIndex - 1);
        }
    }
    
    // Show next image
    function showNextImage() {
        if (currentIndex < images.length - 1) {
            showLightbox(currentIndex + 1);
        }
    }
    
    // Event listeners for gallery links
    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showLightbox(index);
        });
    });
    
    // Close button
    closeBtn.addEventListener('click', hideLightbox);
    
    // Navigation buttons
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });
    
    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                hideLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
    
    // Prevent scrolling when lightbox is open
    lightbox.addEventListener('wheel', (e) => {
        e.preventDefault();
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - previous image
                showPrevImage();
            } else {
                // Swipe left - next image
                showNextImage();
            }
        }
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLightbox);
} else {
    initializeLightbox();
}