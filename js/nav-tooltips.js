// Navigation Tooltips
document.addEventListener('DOMContentLoaded', () => {
    const navTooltip = document.getElementById('nav-tooltip');
    const navItems = document.querySelectorAll('.nav-item');
    const mainNav = document.getElementById('main-nav');

    if (!navTooltip || !mainNav) return;

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const label = item.getAttribute('data-label');
            const rect = item.getBoundingClientRect();
            const navRect = mainNav.getBoundingClientRect();

            navTooltip.textContent = label;
            navTooltip.style.left = `${(rect.left + rect.width / 2) - navRect.left}px`;
            navTooltip.classList.add('visible');
        });

        item.addEventListener('mouseleave', () => {
            navTooltip.classList.remove('visible');
        });
    });
});
