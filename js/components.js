// ============================================
// RENDER FUNCTIONS
// ============================================

export function renderSystemItem(item) {
  const dot = item.dot ? '<span class="sys-dot"></span>' : '';
  return `
    <div class="sys-item">
      ${dot}
      <span class="sys-label">${item.label}:</span>
      <span class="sys-value">${item.value}</span>
    </div>`;
}

export function renderNowItem(text) {
  return `<li>${text}</li>`;
}

export function renderEcosystem(eco) {
  const branches = eco.branches.map((b, i) => {
    const isLast = i === eco.branches.length - 1;
    const conn = isLast ? '└──' : '├──';
    return `
      <div class="eco-branch">
        <span class="eco-connector">${conn}</span>
        <span class="eco-name">${b.name}</span>
        <span class="eco-desc">(${b.desc})</span>
      </div>`;
  }).join('');

  return `<div class="eco-root">${eco.root}</div>${branches}`;
}

export function renderProjectCard(project) {
  const label = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  const tags = project.stack.map(t => `<span class="stack-tag">${t}</span>`).join('');

  return `
    <article class="project-card fade-up">
      <div class="project-card-header">
        <h3 class="project-card-name">${project.name}</h3>
        <span class="status-dot status-dot-${project.status}" title="${label}"></span>
      </div>
      <p class="project-card-desc">${project.description}</p>
      <div class="project-card-footer">
        <div class="project-stack">${tags}</div>
        <span class="project-status-label">${label}</span>
      </div>
    </article>`;
}

export function renderTimelineItem(entry) {
  return `
    <div class="timeline-item fade-up">
      <div class="timeline-year">${entry.year}</div>
      <p class="timeline-text">${entry.text}</p>
    </div>`;
}

export function renderTerminalLine(line) {
  if (line.type === 'cmd') {
    return `<div class="term-line"><span class="prompt">&gt; </span>${line.text}</div>`;
  }
  return `<div class="term-line"><span class="prompt">&gt; </span><span class="key">${line.key}:</span> <span class="val">${line.value}</span></div>`;
}

export function renderBuildLogItem(entry) {
  return `
    <li class="log-entry fade-up">
      <span class="log-dot"></span>
      <span class="log-date">${entry.date}</span>
      <span class="log-text">${entry.text}</span>
    </li>`;
}

export function renderContactLink(contact) {
  return `
    <a href="${contact.href}" class="contact-link fade-up" target="_blank" rel="noopener noreferrer">
      ${contact.icon}
      <span>${contact.label}</span>
    </a>`;
}
