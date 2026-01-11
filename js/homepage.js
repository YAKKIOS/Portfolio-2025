// Homepage - Load featured projects and writing
document.addEventListener('DOMContentLoaded', async function() {
    await loadFeaturedProjects();
    await loadWriting();
});

// Load featured projects
async function loadFeaturedProjects() {
    try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        const featuredProjects = data.projects.filter(p => p.featured);

        const container = document.getElementById('featuredProjects');
        if (!container) return;

        container.innerHTML = featuredProjects.map(project => `
            <article class="project-card">
                <a href="${project.link || '#'}">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </a>
            </article>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Load writing items
async function loadWriting() {
    try {
        const response = await fetch('/data/content.json');
        const data = await response.json();

        const container = document.getElementById('writingList');
        if (!container || !data.writing) return;

        container.innerHTML = data.writing.map(item => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="writing-card">
                <div class="writing-thumbnail" style="background-color: ${item.color || '#90EE90'}">
                    ${item.thumbnail ? `<img src="${item.thumbnail}" alt="">` : ''}
                </div>
                <div class="writing-content">
                    <h3 class="writing-title">${item.title}</h3>
                    <p class="writing-meta">${item.year}</p>
                </div>
            </a>
        `).join('');
    } catch (error) {
        console.error('Error loading writing:', error);
    }
}
