// ============================================
// MAIN — App Initialization
// ============================================

import {
    statusItems, nowBuilding, ecosystem, projects,
    timelineEntries, terminalLines, buildLog, contacts
} from './data.js';

import {
    renderStatusItem, renderNowItem, renderEcosystem,
    renderProjectCard, renderTimelineItem, renderTerminalLine,
    renderBuildLogItem, renderContactLink
} from './components.js';

function init() {
    // --- Status Bar ---
    const statusRow = document.getElementById('statusRow');
    if (statusRow) {
        statusRow.innerHTML = statusItems.map(renderStatusItem).join('');
    }

    // --- NOW: Currently Building ---
    const nowList = document.getElementById('nowBuilding');
    if (nowList) {
        nowList.innerHTML = nowBuilding.map(renderNowItem).join('');
    }

    // --- Ecosystem ---
    const ecoTree = document.getElementById('ecosystemTree');
    if (ecoTree) {
        ecoTree.innerHTML = renderEcosystem(ecosystem);
    }

    // --- Projects ---
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(renderProjectCard).join('');
    }

    // --- Timeline ---
    const timelineList = document.getElementById('timelineList');
    if (timelineList) {
        timelineList.innerHTML = timelineEntries.map(renderTimelineItem).join('');
    }

    // --- Terminal About ---
    const terminalBody = document.getElementById('terminalBody');
    if (terminalBody) {
        terminalBody.innerHTML = terminalLines.map(renderTerminalLine).join('');
    }

    // --- Build Log ---
    const buildLogEl = document.getElementById('buildLog');
    if (buildLogEl) {
        buildLogEl.innerHTML = buildLog.map(renderBuildLogItem).join('');
    }

    // --- Contact ---
    const contactLinks = document.getElementById('contactLinks');
    if (contactLinks) {
        contactLinks.innerHTML = contacts.map(renderContactLink).join('');
    }

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Scroll fade-in observer ---
    const fadeEls = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        fadeEls.forEach(el => observer.observe(el));
    } else {
        fadeEls.forEach(el => el.classList.add('visible'));
    }

    // --- Active nav highlighting ---
    const sections = document.querySelectorAll('.section, .hero');
    const navAnchors = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navAnchors.forEach(a => {
                    a.style.color = '';
                    if (a.getAttribute('href') === `#${id}`) {
                        a.style.color = 'var(--text-primary)';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
