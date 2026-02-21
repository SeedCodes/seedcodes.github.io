// ============================================
// MAIN — App Init
// ============================================

import {
    systemStatus, nowBuilding, ecosystem, projects,
    timelineEntries, terminalLines, buildLog, contacts
} from './data.js';

import {
    renderSystemItem, renderNowItem, renderEcosystem,
    renderProjectCard, renderTimelineItem, renderTerminalLine,
    renderBuildLogItem, renderContactLink
} from './components.js';

function init() {
    // System Status Bar
    mount('statusRow', systemStatus, renderSystemItem);

    // NOW: Currently Building
    mount('nowBuilding', nowBuilding, renderNowItem);

    // Ecosystem
    const ecoEl = document.getElementById('ecosystemTree');
    if (ecoEl) ecoEl.innerHTML = renderEcosystem(ecosystem);

    // Projects
    mount('projectsGrid', projects, renderProjectCard);

    // Timeline
    mount('timelineList', timelineEntries, renderTimelineItem);

    // Terminal
    mount('terminalBody', terminalLines, renderTerminalLine);

    // Build Log
    mount('buildLog', buildLog, renderBuildLogItem);

    // Contact
    mount('contactLinks', contacts, renderContactLink);

    // Mobile nav
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => links.classList.remove('open'))
        );
    }

    // Scroll fade-in
    observeFadeElements();

    // Active nav tracking
    trackActiveNav();
}

/** Mount data into a container */
function mount(id, data, renderer) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = data.map(renderer).join('');
}

/** IntersectionObserver for .fade-up elements */
function observeFadeElements() {
    const els = document.querySelectorAll('.fade-up');

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            }),
            { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
        );
        els.forEach(el => obs.observe(el));
    } else {
        els.forEach(el => el.classList.add('visible'));
    }
}

/** Highlight nav link matching visible section */
function trackActiveNav() {
    const sections = document.querySelectorAll('.section, .hero');
    const anchors = document.querySelectorAll('.nav-links a');

    function update() {
        const y = window.scrollY + 100;
        sections.forEach(s => {
            const top = s.offsetTop;
            const id = s.getAttribute('id');
            if (y >= top && y < top + s.offsetHeight) {
                anchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

// Boot
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
