// ============================================
// DATA
// ============================================

export const systemStatus = [
  { label: 'STATUS', value: 'ONLINE', dot: true },
  { label: 'MODE', value: 'BUILDING' },
  { label: 'FOCUS', value: 'AI SYSTEMS' },
  { label: 'UPTIME', value: '##UPTIME##', isUptime: true },
];

export const nowBuilding = [
  'SeedCodes Website',
  'Buddy-X AI Assistant',
  'Learning Unity Foundations',
];

export const ecosystem = {
  root: 'SeedCodes (Core)',
  branches: [
    { name: 'Buddy-X', desc: 'AI' },
    { name: 'DreamForge', desc: 'Team' },
    { name: 'Ascend', desc: 'Game' },
    { name: 'Automation Lab', desc: 'Experiments' },
  ],
};

export const projects = [
  {
    name: 'The Winter Arc',
    description: 'Challenge companion app — track goals, streaks, and daily progress with a premium dark UI.',
    stack: ['Dart', 'Flutter', 'Firebase'],
    status: 'active',
  },
  {
    name: 'Buddy-X',
    description: 'Personal AI assistant with context awareness and task orchestration.',
    stack: ['Python', 'LLM', 'Automation'],
    status: 'building',
  },
  {
    name: 'Ascend – Path of Elements',
    description: 'Action RPG in Unity with elemental combat and progression.',
    stack: ['Unity', 'C#', 'Game Design'],
    status: 'building',
  },
  {
    name: 'DreamForge',
    description: 'Team identity and brand system for collaborative development.',
    stack: ['Branding', 'Design'],
    status: 'paused',
  },
  {
    name: 'SeedCodes Vision',
    description: 'Future venture for shipping meaningful digital products at scale.',
    stack: ['Strategy', 'Product'],
    status: 'research',
  },
  {
    name: 'Automation Experiments',
    description: 'Workflow automation with n8n and scripts to eliminate friction.',
    stack: ['n8n', 'APIs', 'Scripting'],
    status: 'building',
  },
];

export const timelineEntries = [
  { year: '2025', text: 'Learning & exploration — programming, AI fundamentals, game dev.' },
  { year: '2026', text: 'Building systems — personal AI, automation, shipping projects.' },
  { year: 'Future', text: 'Expanding SeedCodes into a full product ecosystem.' },
];

export const terminalLines = [
  { type: 'cmd', text: 'initializing profile...' },
  { type: 'kv', key: 'Role', value: 'Builder / Developer' },
  { type: 'kv', key: 'Focus', value: 'AI Systems, Automation, Game Development' },
  { type: 'kv', key: 'Stack', value: 'Python, JS, C#, Unity, n8n' },
  { type: 'kv', key: 'Status', value: 'Active' },
  { type: 'cmd', text: 'ready.' },
];

export const buildLog = [
  { date: 'Feb 2026', text: 'Launched SeedCodes digital operating interface.' },
  { date: 'Feb 2026', text: 'Started Buddy-X AI core development.' },
  { date: 'Jan 2026', text: 'Began Unity foundations for Ascend prototype.' },
  { date: 'Dec 2025', text: 'Set up n8n automation experiments pipeline.' },
];

export const bootSequence = [
  { text: 'initializing system...', delay: 0 },
  { text: 'loading modules...', delay: 600 },
  { text: 'syncing core processes...', delay: 1200 },
  { text: 'SEEDCODES ONLINE', delay: 2000, highlight: true },
];

export const contacts = [
  {
    label: 'Email',
    href: 'mailto:seedcodesorg@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SeedCodes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/seedcodesorg/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.776.91.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.293c.46-.163 1.26-.349 2.43-.404C8.76 1.831 9.14 1.819 12 1.819L12 2.163zm0 1.802c-3.148 0-3.504.012-4.743.068-1.145.052-1.767.244-2.18.405a3.3 3.3 0 00-1.197.78 3.3 3.3 0 00-.78 1.197c-.161.413-.353 1.035-.405 2.18C2.64 8.853 2.628 9.21 2.628 12.356s.012 3.504.068 4.743c.052 1.145.244 1.767.405 2.18.185.478.45.88.78 1.197.317.33.719.595 1.197.78.413.161 1.035.353 2.18.405 1.24.056 1.596.068 4.743.068s3.504-.012 4.743-.068c1.145-.052 1.767-.244 2.18-.405.478-.185.88-.45 1.197-.78.33-.317.595-.719.78-1.197.161-.413.353-1.035.405-2.18.056-1.24.068-1.596.068-4.743s-.012-3.504-.068-4.743c-.052-1.145-.244-1.767-.405-2.18a3.3 3.3 0 00-.78-1.197 3.3 3.3 0 00-1.197-.78c-.413-.161-1.035-.353-2.18-.405C15.504 3.977 15.148 3.965 12 3.965zm0 3.064a5.327 5.327 0 110 10.654 5.327 5.327 0 010-10.654zm0 8.786a3.459 3.459 0 100-6.918 3.459 3.459 0 000 6.918zm6.788-8.997a1.245 1.245 0 11-2.49 0 1.245 1.245 0 012.49 0z"/></svg>`,
  },
];
