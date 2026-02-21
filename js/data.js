// ============================================
// DATA — All site content lives here.
// Edit this file to update content without
// touching rendering logic.
// ============================================

export const statusItems = [
  { label: 'STATUS', value: 'ACTIVE', dot: true },
  { label: 'MODE', value: 'LEARNING + BUILDING' },
  { label: 'FOCUS', value: 'EXECUTION' },
];

export const nowBuilding = [
  'SeedCodes Website',
  'Buddy-X AI Assistant',
  'Learning Unity Foundations',
];

export const ecosystem = {
  root: 'SeedCodes (Core Vision)',
  branches: [
    { name: 'Buddy-X', desc: 'Personal AI' },
    { name: 'DreamForge', desc: 'Creative Team' },
    { name: 'Ascend', desc: 'Game Project' },
    { name: 'Automation Lab', desc: 'Experiments' },
  ],
};

export const projects = [
  {
    name: 'Buddy-X',
    description: 'Personal AI assistant with real-world context awareness and task orchestration.',
    stack: ['Python', 'LLM', 'Automation'],
    status: 'active',
  },
  {
    name: 'Ascend – Path of Elements',
    description: 'Action RPG in Unity with elemental combat and procedural progression.',
    stack: ['Unity', 'C#', 'Game Design'],
    status: 'building',
  },
  {
    name: 'DreamForge',
    description: 'Team identity and brand system for collaborative product development.',
    stack: ['Branding', 'Design'],
    status: 'paused',
  },
  {
    name: 'SeedCodes Vision',
    description: 'Future company — a venture for shipping meaningful digital products at scale.',
    stack: ['Strategy', 'Product'],
    status: 'research',
  },
  {
    name: 'Automation Experiments',
    description: 'Workflow automation using n8n and custom scripts to eliminate friction.',
    stack: ['n8n', 'APIs', 'Scripting'],
    status: 'building',
  },
];

export const timelineEntries = [
  { year: '2025', text: 'Learning & exploration — programming, AI fundamentals, game dev basics.' },
  { year: '2026', text: 'Building systems — personal AI, automation pipelines, shipping projects.' },
  { year: 'Future', text: 'Expanding the SeedCodes ecosystem into a full product studio.' },
];

export const terminalLines = [
  { type: 'command', text: 'initializing profile...' },
  { type: 'data', key: 'Role', value: 'Builder / Developer' },
  { type: 'data', key: 'Focus', value: 'AI Systems, Automation, Game Development' },
  { type: 'data', key: 'Stack', value: 'Python, JS, C#, Unity, n8n' },
  { type: 'data', key: 'Status', value: 'Online' },
  { type: 'command', text: 'ready.' },
];

export const buildLog = [
  { date: 'Feb 2026', text: 'Launched SeedCodes command center website.' },
  { date: 'Feb 2026', text: 'Started Buddy-X AI assistant core development.' },
  { date: 'Jan 2026', text: 'Began Unity foundations for Ascend game prototype.' },
  { date: 'Dec 2025', text: 'Set up n8n automation experiments pipeline.' },
];

export const contacts = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
];
