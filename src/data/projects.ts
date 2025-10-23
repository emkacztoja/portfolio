export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // allow a project to belong to one or more categories
  category: string | string[];
  codeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DirtCount',
    description: 'Minecraft mod for aggregating network player counts (server-side).',
    image: '/projects/dirtcount.png',
    tags: ['Java', 'Minecraft', 'Server Networking'],
    category: 'minecraft',
  },
  {
    id: 2,
    title: 'Codebreaker',
    description: 'Fabric mod for detecting contest verification codes on Minecraft servers.',
    image: '/projects/codebreaker.png',
    tags: ['Java', 'Fabric', 'Minecraft'],
    category: 'minecraft',
    codeUrl: 'https://github.com/emkacztoja/codebreaker'
  },
  {
    id: 3,
    title: 'SWSK Launcher (Desktop)',
    description: 'Modern Minecraft launcher for managing and playing instances (Electron).',
    image: '/projects/swsk-launcher.png',
    tags: ['Electron', 'JavaScript', 'Minecraft'],
    category: 'desktop',
    demoUrl: 'https://swsk.net',
  },
  {
    id: 4,
    title: 'SWSK Launcher Website',
    description: 'Website for the SWSK Minecraft launcher community.',
    image: '/projects/swsk-website.png',
    tags: ['Web Development', 'Community', 'Minecraft'],
    category: ['web', 'community'],
    demoUrl: 'https://swsk.net',
  },
  {
    id: 5,
    title: 'Obsera',
    description: 'Web panel for Minecraft server management with custom mod integration.',
    image: '/projects/obsera.png',
    tags: ['Web', 'Admin', 'Minecraft', 'Mods'],
    category: ['web', 'admin'],
  },
  {
    id: 6,
    title: 'GeneRAT',
    description: 'Cross-platform Remote Administration Tool with web-based dashboard (Flask).',
    image: '/projects/generat.png',
    tags: ['Python', 'Flask', 'Web Dashboard'],
    category: ['desktop', 'web'],
    codeUrl: 'https://github.com/emkacztoja/generat'
  },
  {
    id: 7,
    title: 'AirKey ESP32',
    description: 'ESP32-based virtual keyboard with Bluetooth and WiFi connectivity.',
    image: '/projects/airkey.png',
    tags: ['ESP32', 'C++', 'Bluetooth', 'WiFi', 'Embedded'],
    category: 'embedded',
    codeUrl: 'https://github.com/emkacztoja/airkey-esp32'
  },
  {
    id: 8,
    title: 'KeyMaster ESP32-S3',
    description: 'ESP32-S3-based keystroke injection tool for automation and testing (C++).',
    image: '/projects/keymaster.png',
    tags: ['ESP32-S3', 'C++', 'Web Interface', 'Embedded'],
    category: 'embedded',
    codeUrl: 'https://github.com/emkacztoja/keymaster'
  }
];
