// ============================================
// MAIN — Cinematic boot, particles, living UI
// ============================================

import {
    systemStatus, nowBuilding, ecosystem, projects,
    timelineEntries, terminalLines, buildLog, contacts,
    bootSequence
} from './data.js';

import {
    renderSystemItem, renderNowItem, renderEcosystem,
    renderProjectCard, renderTimelineItem,
    renderBuildLogItem, renderContactLink
} from './components.js';

// ---- STATE ----
const startTime = Date.now();
let bootDone = false;

// ============================================
// PARTICLE SYSTEM (lightweight)
// ============================================
class ParticleField {
    constructor(canvas, opts = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.count = opts.count || 40;
        this.color = opts.color || 'rgba(56,189,248,';
        this.maxOpacity = opts.maxOpacity || 0.3;
        this.speed = opts.speed || 0.3;
        this.resize();
        this.init();
        this._onResize = () => this.resize();
        window.addEventListener('resize', this._onResize, { passive: true });
    }

    resize() {
        this.w = this.canvas.width = this.canvas.offsetWidth;
        this.h = this.canvas.height = this.canvas.offsetHeight;
    }

    init() {
        this.particles = Array.from({ length: this.count }, () => ({
            x: Math.random() * this.w,
            y: Math.random() * this.h,
            r: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * this.speed,
            vy: (Math.random() - 0.5) * this.speed,
            o: Math.random() * this.maxOpacity,
        }));
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = this.w;
            if (p.x > this.w) p.x = 0;
            if (p.y < 0) p.y = this.h;
            if (p.y > this.h) p.y = 0;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fillStyle = this.color + p.o + ')';
            this.ctx.fill();
        }
    }

    animate() {
        this.draw();
        this._raf = requestAnimationFrame(() => this.animate());
    }

    stop() {
        cancelAnimationFrame(this._raf);
        window.removeEventListener('resize', this._onResize);
    }
}

// ============================================
// BOOT SEQUENCE — letter-by-letter typing
// ============================================
function runBoot() {
    const overlay = document.getElementById('bootOverlay');
    const terminal = document.getElementById('bootTerminal');
    const logo = document.getElementById('bootLogo');
    const status = document.getElementById('bootStatus');
    const skipBtn = document.getElementById('bootSkip');

    // If boot already seen this session, skip instantly
    if (sessionStorage.getItem('bootSeen')) {
        overlay.remove();
        document.getElementById('siteWrapper').classList.add('active');
        return;
    }

    // Boot particles
    const bootCanvas = document.getElementById('bootParticles');
    const bootParticles = new ParticleField(bootCanvas, { count: 30, maxOpacity: 0.2, speed: 0.2 });
    bootParticles.animate();

    let skipped = false;

    // Persistent blinking cursor element
    const cursor = document.createElement('span');
    cursor.className = 'boot-cursor';

    function endBoot() {
        if (bootDone) return;
        bootDone = true;
        sessionStorage.setItem('bootSeen', '1');
        cursor.remove();
        logo.classList.add('show');
        status.classList.add('show');

        setTimeout(() => {
            overlay.classList.add('done');
            document.getElementById('siteWrapper').classList.add('active');
            bootParticles.stop();
            setTimeout(() => { overlay.remove(); }, 900);
        }, skipped ? 100 : 800);
    }

    skipBtn.addEventListener('click', () => {
        skipped = true;
        endBoot();
    });

    // Type each line letter-by-letter
    let lineIndex = 0;

    function typeLine() {
        if (skipped || bootDone) return;
        if (lineIndex >= bootSequence.length) {
            endBoot();
            return;
        }

        const line = bootSequence[lineIndex];
        const isHighlight = line.highlight;

        // Create line container
        const div = document.createElement('div');
        div.className = 'boot-line';
        div.style.animationDelay = '0s';

        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = '> ';
        div.appendChild(prompt);

        // Text node that will be typed into
        const textSpan = document.createElement('span');
        if (isHighlight) textSpan.className = 'ok';
        textSpan.textContent = '';
        div.appendChild(textSpan);

        // Attach cursor to this line
        div.appendChild(cursor);
        terminal.appendChild(div);

        // Type letter by letter
        const text = line.text;
        let charIdx = 0;
        const charSpeed = isHighlight ? 40 : 30; // slightly slower for final line

        const interval = setInterval(() => {
            if (skipped || bootDone) {
                clearInterval(interval);
                return;
            }
            charIdx++;
            textSpan.textContent = text.slice(0, charIdx);
            if (charIdx >= text.length) {
                clearInterval(interval);
                lineIndex++;
                // Pause between lines, then type next
                const pauseAfter = isHighlight ? 500 : 300;
                setTimeout(typeLine, pauseAfter);
            }
        }, charSpeed);
    }

    setTimeout(typeLine, 400);
}

// ============================================
// UPTIME COUNTER
// ============================================
function startUptime() {
    const el = document.getElementById('uptimeValue');
    if (!el) return;

    function update() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
        const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
        const s = String(elapsed % 60).padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
    }

    setInterval(update, 1000);
    update();
}

// ============================================
// TERMINAL TYPING (on viewport entry)
// ============================================
function initTerminalTyping() {
    const body = document.getElementById('terminalBody');
    if (!body) return;

    let hasTyped = false;

    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !hasTyped) {
            hasTyped = true;
            obs.disconnect();
            typeTerminal(body);
        }
    }, { threshold: 0.3 });

    obs.observe(body);
}

function typeTerminal(container) {
    container.innerHTML = '';
    let i = 0;

    function addLine() {
        if (i >= terminalLines.length) {
            // Final cursor
            const cursor = document.createElement('span');
            cursor.className = 'term-cursor';
            container.lastChild.appendChild(cursor);
            return;
        }

        const line = terminalLines[i];
        const div = document.createElement('div');
        div.className = 'term-line';

        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = '> ';
        div.appendChild(prompt);

        if (line.type === 'cmd') {
            const text = document.createTextNode('');
            div.appendChild(text);
            container.appendChild(div);
            typeText(text, line.text, () => { i++; setTimeout(addLine, 200); });
        } else {
            const key = document.createElement('span');
            key.className = 'key';
            key.textContent = line.key + ': ';
            div.appendChild(key);

            const val = document.createElement('span');
            val.className = 'val';
            val.textContent = '';
            div.appendChild(val);
            container.appendChild(div);
            typeText(val, line.value, () => { i++; setTimeout(addLine, 150); });
        }
    }

    addLine();
}

function typeText(node, text, callback) {
    let idx = 0;
    const interval = setInterval(() => {
        idx++;
        node.textContent = text.slice(0, idx);
        if (idx >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 25);
}

// ============================================
// SCROLL REVEAL with stagger
// ============================================
function initReveal() {
    const els = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const delay = parseInt(e.target.dataset.delay || '0', 10);
                setTimeout(() => e.target.classList.add('visible'), delay);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(el => obs.observe(el));
}

// ============================================
// PARALLAX CARDS (light mouse tracking)
// ============================================
function initParallax() {
    const cards = document.querySelectorAll('[data-parallax]');
    if (!cards.length || window.innerWidth < 768) return;

    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.addEventListener('mousemove', (e) => {
        const rect = grid.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        cards.forEach(card => {
            const rx = y * -4;
            const ry = x * 4;
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        });
    });

    grid.addEventListener('mouseleave', () => {
        cards.forEach(card => {
            card.style.transform = '';
        });
    });
}

// ============================================
// NAV
// ============================================
function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => links.classList.remove('open'))
    );

    // Active tracking
    const sections = document.querySelectorAll('.section, .hero');
    const anchors = document.querySelectorAll('.nav-links a');

    function update() {
        const y = window.scrollY + 100;
        sections.forEach(s => {
            const id = s.getAttribute('id');
            if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
                anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
            }
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

// ============================================
// MOUNT DATA
// ============================================
function mount(id, data, renderer) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = data.map(renderer).join('');
}

function mountEcosystem() {
    const el = document.getElementById('ecosystemTree');
    if (el) el.innerHTML = renderEcosystem(ecosystem);
}

// ============================================
// INIT
// ============================================
function init() {
    // Boot sequence
    runBoot();

    // Mount all sections
    mount('statusRow', systemStatus, renderSystemItem);
    mount('nowBuilding', nowBuilding, renderNowItem);
    mountEcosystem();
    mount('projectsGrid', projects, renderProjectCard);
    mount('timelineList', timelineEntries, renderTimelineItem);
    mount('buildLog', buildLog, renderBuildLogItem);
    mount('contactLinks', contacts, renderContactLink);

    // Background particles
    const bgCanvas = document.getElementById('bgCanvas');
    if (bgCanvas) {
        const bgParticles = new ParticleField(bgCanvas, { count: 25, maxOpacity: 0.15, speed: 0.15 });
        bgParticles.animate();
    }

    // Uptime counter
    startUptime();

    // Terminal typing on scroll
    initTerminalTyping();

    // Scroll reveal
    initReveal();

    // Parallax cards
    initParallax();

    // Page transitions
    initPageTransitions();

    // Navigation
    initNav();
}

// ============================================
// PAGE TRANSITIONS
// ============================================
function initPageTransitions() {
    const overlay = document.getElementById('pageTransition');
    if (!overlay) return;

    // Clear overlay when page is restored via back/forward cache
    window.addEventListener('pageshow', () => {
        overlay.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-transition]');
        if (!link) return;

        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        overlay.classList.add('active');
        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
