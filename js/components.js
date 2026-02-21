// ============================================
// RENDER FUNCTIONS (Component-like)
// ============================================

/**
 * Render a single project card
 */
export function renderProjectCard(project) {
    const statusLabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
    const stackPills = project.stack
        .map(t => `<span class="stack-pill">${t}</span>`)
        .join('');

    return `
    <article class="project-card fade-in">
      <div class="project-card-header">
        <h3 class="project-card-name">${project.name}</h3>
        <span class="status-badge status-${project.status}">${statusLabel}</span>
      </div>
      <p class="project-card-desc">${project.description}</p>
      <div class="project-card-stack">${stackPills}</div>
    </article>
  `;
}

/**
 * Render a skill category block
 */
export function renderSkillCategory(category) {
    const items = category.items
        .map(item => `<span class="skill-item">${item}</span>`)
        .join('');

    return `
    <div class="skill-category fade-in">
      <h3 class="skill-category-title">${category.category}</h3>
      <div class="skill-items">${items}</div>
    </div>
  `;
}

/**
 * Render a contact link
 */
export function renderContactLink(contact) {
    return `
    <a href="${contact.href}" class="contact-link fade-in" target="_blank" rel="noopener noreferrer">
      ${contact.icon}
      <span>${contact.label}</span>
    </a>
  `;
}
