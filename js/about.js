// About Page - Load experience and FAQs
document.addEventListener('DOMContentLoaded', async function() {
    await loadExperience();
    await loadFAQs();
});

// Load experience
async function loadExperience() {
    try {
        const response = await fetch('../data/content.json');
        const data = await response.json();

        const container = document.getElementById('experienceList');
        if (!container || !data.experience) return;

        container.innerHTML = data.experience.map(item => `
            <div class="experience-item">
                <h3 class="experience-title">${item.role}</h3>
                <p class="experience-company">${item.company}</p>
                <p class="experience-date">${item.dates}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

// Load FAQs
async function loadFAQs() {
    try {
        const response = await fetch('../data/content.json');
        const data = await response.json();

        const container = document.getElementById('faqsList');
        if (!container || !data.faqs) return;

        container.innerHTML = data.faqs.map((faq, index) => `
            <div class="faq-item" data-faq-index="${index}">
                <button class="faq-question">
                    <span>${faq.question}</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">${faq.answer}</div>
                </div>
            </div>
        `).join('');

        // Add click handlers for FAQs
        const faqItems = container.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', function() {
                item.classList.toggle('is-open');
            });
        });
    } catch (error) {
        console.error('Error loading FAQs:', error);
    }
}
