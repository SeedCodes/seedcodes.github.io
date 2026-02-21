// ============================================
// RENDER FUNCTIONS (Component-like)
// ============================================

export function renderStatusItem(item) {
  const dot = item.dot ? '<span class="status-dot"></span>' : '';
  return `
    <div class="status-item">
      ${dot}
      <span class="status-item-label">${item.label}:</span>
      <span class="status-item-value">${item.value}</span>
    </div>
  `;
}

export function renderNowItem(text) {
  return `<li>${text}</li>`;
}

export function renderEcosystem(eco) {
  const branches = eco.branches.map((b, i) => {
    const isLast = i === eco.branches.length - 1;
    const connector = isLast ? '└──' : '├──';
    return `
      <div class="eco-branch">
        <span class="eco-connector">${connector}</span>
        <span class="eco-name">${b.name}</span>
        <span class="eco-desc">(${b.desc})</span>
      </div>
    `;
  }).join('');

  return `
    <div class="eco-root">${eco.root}</div>
    ${branches}
  `;
}

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

export function renderTimelineItem(entry) {
  return `
    <div class="timeline-item fade-in">
      <div class="timeline-year">${entry.year}</div>
      <p class="timeline-text">${entry.text}</p>
    </div>
  `;
}

export function renderTerminalLine(line) {
  if (line.type === 'command') {
    return `<div class="terminal-line"><span class="prompt">&gt; </span>${line.text}</div>`;
  }
  return `<div class="terminal-line"><span class="prompt">&gt; </span><span class="key">${line.key}:</span> <span class="val">${line.value}</span></div>`;
}

export function renderBuildLogItem(entry) {
  return `
    <li class="build-log-item fade-in">
      <span class="build-log-date">${entry.date}</span>
      <span class="build-log-text">${entry.text}</span>
    </li>
  `;
}

export function renderContactLink(contact) {
  return `
    <a href="${contact.href}" class="contact-link fade-in" target="_blank" rel="noopener noreferrer">
      ${contact.icon}
      <span>${contact.label}</span>
    </a>
  `;
}
