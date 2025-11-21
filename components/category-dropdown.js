// Category dropdown functionality for gallery pages
function initializeCategoryDropdown() {
    const dropdown = document.getElementById('category-select');
    
    if (dropdown) {
        dropdown.addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue) {
                window.location.href = selectedValue;
            }
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCategoryDropdown);
} else {
    initializeCategoryDropdown();
}