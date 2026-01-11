// Video Expansion Animation
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const contentWrapper = document.getElementById('contentWrapper');
    const bottomNav = document.getElementById('bottomNav');

    // Wait a few seconds, then expand the video
    setTimeout(function() {
        if (videoContainer) {
            videoContainer.classList.add('is-expanded');
        }

        // Show content and navbar after video expands
        setTimeout(function() {
            if (contentWrapper) {
                contentWrapper.classList.add('is-visible');
            }
            if (bottomNav) {
                bottomNav.style.opacity = '1';
            }
        }, 600); // Wait for video expansion animation to complete
    }, 2000); // Wait 2 seconds before starting expansion

    // Set initial navbar opacity to 0
    if (bottomNav) {
        bottomNav.style.opacity = '0';
        bottomNav.style.transition = 'opacity 0.6s ease';
    }
});
