// Tilted Image Carousel for About Page
document.addEventListener('DOMContentLoaded', function() {
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const tiltedImages = document.getElementById('tiltedImages');

    if (!tiltedImages) return;

    // Image sets (6 images total, 2 sets of 3)
    const imageSets = [
        [
            '/images/carousel/image-1.jpg',
            '/images/carousel/image-2.jpg',
            '/images/carousel/image-3.jpg'
        ],
        [
            '/images/carousel/image-4.jpg',
            '/images/carousel/image-5.jpg',
            '/images/carousel/image-6.jpg'
        ]
    ];

    let currentSet = 0;
    const alternateRotations = [
        [6, -5, 7],  // Alternate rotations for set 1
        [-7, 5, -4]  // Alternate rotations for set 2
    ];

    // Function to update images
    function updateImages(setIndex) {
        const images = tiltedImages.querySelectorAll('.tilted-image img');
        const imageElements = tiltedImages.querySelectorAll('.tilted-image');

        images.forEach((img, index) => {
            img.src = imageSets[setIndex][index];
        });

        // Apply alternate rotations
        imageElements.forEach((el, index) => {
            const rotation = alternateRotations[setIndex][index];
            el.style.setProperty('--rotation', `${rotation}deg`);
        });
    }

    // Next button
    if (carouselNext) {
        carouselNext.addEventListener('click', function() {
            currentSet = (currentSet + 1) % imageSets.length;
            updateImages(currentSet);
        });
    }

    // Previous button
    if (carouselPrev) {
        carouselPrev.addEventListener('click', function() {
            currentSet = (currentSet - 1 + imageSets.length) % imageSets.length;
            updateImages(currentSet);
        });
    }
});
