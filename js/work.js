// Work Page - Load all projects
document.addEventListener('DOMContentLoaded', async function() {
    await loadAllProjects();
});

async function loadAllProjects() {
    try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();

        const container = document.getElementById('projectsList');
        if (!container) return;

        container.innerHTML = data.projects.map(project => `
            <article class="project-card">
                <a href="${project.link || '#'}">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    ${project.role ? `<p class="project-meta">${project.role} • ${project.year}</p>` : ''}
                </a>
            </article>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}
