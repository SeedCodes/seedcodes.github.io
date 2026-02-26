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
    slug: 'winter-arc',
    description: 'Challenge companion app — track goals, streaks, and daily progress with a premium dark UI.',
    stack: ['Dart', 'Flutter', 'Firebase'],
    status: 'active',
    tagline: 'A personal challenge companion — track your goals, build streaks, and grow through structured daily progress.',
    overview: 'The Winter Arc is a mobile app for people who commit to structured self-improvement challenges. Set your goals, name your arc, and track daily progress with a premium dark UI. No social feeds, no gamification noise — just you and your commitment.',
    features: [
      { icon: '🎯', name: 'Goal Setting', desc: 'Define custom goals with clear targets and track completion daily.' },
      { icon: '🔥', name: 'Streak Tracking', desc: 'Build momentum with visual streak counters and success rates.' },
      { icon: '📊', name: 'Progress Dashboard', desc: 'Progress ring, daily checklist, and arc completion at a glance.' },
      { icon: '📓', name: 'Daily Journal', desc: 'Log reflections and notes each day alongside your goals.' },
      { icon: '🌙', name: 'Dark Mode UI', desc: 'Minimal, premium dark interface designed for focus.' },
      { icon: '⏱️', name: 'Custom Durations', desc: '30, 60, 90-day arcs — or define your own challenge length.' },
    ],
    techDetail: ['Dart', 'Flutter', 'Firebase', 'Provider', 'Shared Preferences', 'Material Design 3'],
    steps: [
      'Set up your arc — choose a name, start date, duration, and define your goals.',
      'Each day, check off completed goals and optionally write a journal entry.',
      'Watch your streaks build, track your success rate, and complete the arc.',
    ],
    github: 'https://github.com/SeedCodes',
  },
  {
    name: 'Gesture Media Control',
    slug: 'gesture-media-control',
    description: 'Controling any media just by simple hand gestures.',
    stack: ['Python', 'CV'],
    status: 'active',
    tagline: 'Control any media on your system with hand gestures. No keyboard, no mouse — just natural movement.',
    overview: 'A Python-powered gesture recognition system that uses your webcam to detect hand gestures and translate them into media controls. Play/pause, skip, adjust volume — all in real time on Ubuntu. Runs as a background service with desktop notifications.',
    features: [
      { icon: '✋', name: 'Gesture Detection', desc: 'Real-time hand tracking with MediaPipe for precise recognition.' },
      { icon: '🎵', name: 'Media Control', desc: 'Play, pause, skip, volume — mapped to intuitive gestures.' },
      { icon: '⚡', name: 'Real-time Processing', desc: 'Low-latency CV pipeline for instant gesture response.' },
      { icon: '🔔', name: 'Desktop Notifications', desc: 'Visual feedback via system notifications on gesture recognition.' },
      { icon: '🔧', name: 'Background Service', desc: 'Runs as systemd service — toggle on/off, auto-start on boot.' },
      { icon: '🐧', name: 'Ubuntu Native', desc: 'Built for Ubuntu/Linux with D-Bus media integration.' },
    ],
    techDetail: ['Python', 'OpenCV', 'MediaPipe', 'D-Bus', 'systemd', 'Ubuntu'],
    steps: [
      'Webcam captures frames and sends them to MediaPipe hand detection.',
      'Hand landmarks are analyzed to classify gestures (open palm, fist, swipe, pinch).',
      'Recognized gestures trigger system media commands via D-Bus.',
    ],
    github: 'https://github.com/SeedCodes/gesture-control',
  },
  {
    name: 'Buddy-X',
    slug: 'buddy-x',
    description: 'Personal AI assistant with context awareness and task orchestration.',
    stack: ['Python', 'LLM', 'Automation'],
    status: 'building',
    tagline: 'A personal AI assistant that understands context and orchestrates your tasks intelligently.',
    overview: 'Buddy-X is designed to be a personal AI layer that sits on top of your workflows. It understands context from conversations, manages tasks, automates repetitive work, and learns your preferences over time. Think of it as your intelligent digital co-pilot.',
    features: [
      { icon: '🧠', name: 'Context Awareness', desc: 'Remembers past conversations and understands context across sessions.' },
      { icon: '📋', name: 'Task Orchestration', desc: 'Breaks down complex tasks and manages execution flow.' },
      { icon: '🔄', name: 'Workflow Automation', desc: 'Automates repetitive tasks and integrates with your tools.' },
      { icon: '💬', name: 'Natural Interaction', desc: 'Conversational interface — just talk like you would to a teammate.' },
    ],
    techDetail: ['Python', 'LLM APIs', 'LangChain', 'Automation', 'Vector DB'],
    steps: [
      'Describe what you need in plain language.',
      'Buddy-X breaks it down, plans the approach, and gathers context.',
      'Executes tasks, automates flows, and reports back with results.',
    ],
    github: 'https://github.com/SeedCodes',
  },
  {
    name: 'Ascend – Path of Elements',
    slug: 'ascend',
    description: 'Action RPG in Unity with elemental combat and progression.',
    stack: ['Unity', 'C#', 'Game Design'],
    status: 'building',
    tagline: 'An action RPG with elemental combat, deep progression, and a world that reacts to your choices.',
    overview: 'Ascend is an action RPG built in Unity where players master elemental powers — fire, water, earth, and air — to fight through dynamically generated encounters. The combat system rewards skill and strategy, with a progression system that lets you evolve your elemental abilities.',
    features: [
      { icon: '🔥', name: 'Elemental Combat', desc: 'Master fire, water, earth, and air with unique move sets.' },
      { icon: '⚔️', name: 'Skill-Based Fighting', desc: 'Combat that rewards timing, positioning, and combo creativity.' },
      { icon: '📈', name: 'Deep Progression', desc: 'Level up elements, unlock abilities, and evolve your build.' },
      { icon: '🌍', name: 'Reactive World', desc: 'Environments and enemies respond to your elemental choices.' },
    ],
    techDetail: ['Unity', 'C#', 'Shader Graph', 'Cinemachine', 'Game Design'],
    steps: [
      'Choose your starting element and enter the world.',
      'Fight through elemental encounters, learn combos, and level up.',
      'Unlock new elements and evolve your combat style.',
    ],
    github: 'https://github.com/SeedCodes',
  },
  {
    name: 'DreamForge',
    slug: 'dreamforge',
    description: 'Team identity and brand system for collaborative development.',
    stack: ['Branding', 'Design'],
    status: 'paused',
    tagline: 'A team identity and brand system for collaborative builders.',
    overview: 'DreamForge is the brand and identity framework behind SeedCodes\' collaborative efforts. It defines visual language, communication style, and team culture for projects that involve multiple contributors. Currently paused while core projects take priority.',
    features: [
      { icon: '🎨', name: 'Visual Identity', desc: 'Logo, color palette, typography, and design guidelines.' },
      { icon: '📝', name: 'Brand Voice', desc: 'Tone, messaging framework, and communication standards.' },
      { icon: '🤝', name: 'Team Culture', desc: 'Collaboration principles and contributor guidelines.' },
    ],
    techDetail: ['Figma', 'Brand Strategy', 'Design Systems', 'Documentation'],
    steps: [
      'Define the core brand values and visual direction.',
      'Create design assets, templates, and guidelines.',
      'Distribute to team members and iterate on feedback.',
    ],
    github: 'https://github.com/SeedCodes',
  },
  {
    name: 'SeedCodes Vision',
    slug: 'seedcodes-vision',
    description: 'Future venture for shipping meaningful digital products at scale.',
    stack: ['Strategy', 'Product'],
    status: 'research',
    tagline: 'The long-term vision — shipping meaningful digital products at scale.',
    overview: 'SeedCodes Vision is the strategic blueprint for growing SeedCodes from a solo builder\'s lab into a product ecosystem. It covers product strategy, market research, and the roadmap for scaling from personal projects to public products that serve real users.',
    features: [
      { icon: '🗺️', name: 'Product Roadmap', desc: 'Structured plan from idea to launch for each product.' },
      { icon: '📊', name: 'Market Research', desc: 'Understanding users, competitors, and market positioning.' },
      { icon: '🚀', name: 'Launch Strategy', desc: 'Go-to-market planning for each product release.' },
      { icon: '🔄', name: 'Iteration Framework', desc: 'Feedback loops and improvement cycles post-launch.' },
    ],
    techDetail: ['Product Strategy', 'Market Analysis', 'Roadmapping', 'User Research'],
    steps: [
      'Research the problem space and identify user needs.',
      'Design the product, build an MVP, and validate with users.',
      'Launch, gather feedback, and iterate toward product-market fit.',
    ],
    github: 'https://github.com/SeedCodes',
  },
  {
    name: 'Automation Experiments',
    slug: 'automation-experiments',
    description: 'Workflow automation with n8n and scripts to eliminate friction.',
    stack: ['n8n', 'APIs', 'Scripting'],
    status: 'building',
    tagline: 'Eliminating friction through workflow automation and intelligent scripting.',
    overview: 'A collection of automation experiments using n8n, custom scripts, and API integrations. The goal is to identify repetitive tasks in daily workflows and replace them with automated pipelines — from notifications and data syncing to content scheduling and system monitoring.',
    features: [
      { icon: '🔗', name: 'API Integrations', desc: 'Connect services like GitHub, email, and databases seamlessly.' },
      { icon: '⚙️', name: 'n8n Workflows', desc: 'Visual automation pipelines for complex multi-step processes.' },
      { icon: '📜', name: 'Custom Scripts', desc: 'Bash and Python scripts for system-level automation.' },
      { icon: '📡', name: 'Monitoring', desc: 'Automated alerts and status checks for running services.' },
    ],
    techDetail: ['n8n', 'REST APIs', 'Python', 'Bash', 'Webhooks', 'Cron'],
    steps: [
      'Identify a repetitive task or friction point in your workflow.',
      'Design an automation pipeline using n8n or custom scripts.',
      'Deploy, monitor, and refine the automation over time.',
    ],
    github: 'https://github.com/SeedCodes',
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
