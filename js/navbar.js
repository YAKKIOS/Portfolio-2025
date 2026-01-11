// Bottom Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const bottomNav = document.getElementById('bottomNav');

    if (navToggle && bottomNav) {
        navToggle.addEventListener('click', function() {
            bottomNav.classList.toggle('is-open');
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(event) {
            if (!bottomNav.contains(event.target)) {
                bottomNav.classList.remove('is-open');
            }
        });

        // Prevent nav from closing when clicking inside
        bottomNav.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});
