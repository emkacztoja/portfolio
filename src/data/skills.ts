export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  // icon key maps to a react-icons component name (e.g. 'FaGit')
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend Development
  { name: 'React', level: 95, category: 'frontend', icon: 'FaReact' },
  { name: 'Sass/SCSS', level: 88, category: 'frontend', icon: 'SiSass' },
  { name: 'TypeScript', level: 76, category: 'frontend', icon: 'SiTypescript' },
  { name: 'Vue.js', level: 66, category: 'frontend', icon: 'SiVuedotjs' },
  { name: 'Tailwind CSS', level: 43, category: 'frontend', icon: 'SiTailwindcss' },

  // Backend Development
  { name: 'Python', level: 87, category: 'backend', icon: 'FaPython' },
  { name: 'Java', level: 72, category: 'backend', icon: 'FaJava' },
  { name: 'Spring Boot', level: 68, category: 'backend', icon: 'SiSpring' },
  { name: 'MongoDB', level: 66, category: 'backend', icon: 'SiMongodb' },
  { name: 'Node.js', level: 64, category: 'backend', icon: 'FaNodeJs' },

  // Tools & Technologies (icon keys reference react-icons components)
  { name: 'Git', level: 94, category: 'tools', icon: 'FaGit' },
  { name: 'Docker', level: 86, category: 'tools', icon: 'FaDocker' },
  { name: 'Google Cloud', level: 83, category: 'tools', icon: 'SiGooglecloud' },
  { name: 'AWS', level: 67, category: 'tools', icon: 'FaAws' },
  { name: 'CI/CD', level: 58, category: 'tools', icon: 'SiCircleci' },
];
