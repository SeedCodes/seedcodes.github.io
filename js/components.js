// ============================================
// COMPONENTS — Render functions
// ============================================

export function renderSystemItem(item) {
  const dot = item.dot ? '<span class="pulse-dot pulse-green"></span>' : '';
  const id = item.isUptime ? ' id="uptimeValue"' : '';
  const val = item.isUptime ? '00:00:00' : item.value;
  return `<div class="sys-item">${dot}<span class="sys-label">${item.label}:</span><span class="sys-val"${id}>${val}</span></div>`;
}

export function renderNowItem(text) {
  return `<li>${text}</li>`;
}

export function renderEcosystem(eco) {
  const branches = eco.branches.map((b, i) => {
    const conn = i === eco.branches.length - 1 ? '└──' : '├──';
    return `<div class="eco-branch"><span class="eco-conn">${conn}</span><span class="eco-name">${b.name}</span><span class="eco-desc">(${b.desc})</span></div>`;
  }).join('');
  return `<div class="eco-root">${eco.root}</div>${branches}`;
}

export function renderProjectCard(project, index) {
  const label = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  const tags = project.stack.map(t => `<span class="stack-tag">${t}</span>`).join('');
  const delay = index * 80;
  return `
    <article class="project-card reveal" data-delay="${delay}" data-parallax>
      <div class="project-card-header">
        <h3 class="project-name">${project.name}</h3>
        <span class="status-dot dot-${project.status}" title="${label}"></span>
      </div>
      <p class="project-desc">${project.description}</p>
      <div class="project-footer">
        <div class="project-stack">${tags}</div>
        <span class="project-status-text">${label}</span>
      </div>
    </article>`;
}

export function renderTimelineItem(entry, index) {
  return `
    <div class="timeline-item reveal" data-delay="${index * 120}">
      <div class="timeline-year">${entry.year}</div>
      <p class="timeline-text">${entry.text}</p>
    </div>`;
}

export function renderBuildLogItem(entry, index) {
  return `
    <li class="log-entry reveal" data-delay="${index * 60}">
      <span class="log-dot"></span>
      <span class="log-date">${entry.date}</span>
      <span class="log-text">${entry.text}</span>
    </li>`;
}

export function renderContactLink(contact, index) {
  return `
    <a href="${contact.href}" class="contact-link reveal" data-delay="${index * 80}" target="_blank" rel="noopener noreferrer">
      ${contact.icon}<span>${contact.label}</span>
    </a>`;
}
