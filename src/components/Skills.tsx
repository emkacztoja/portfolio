import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { FaGit, FaDocker, FaAws, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiCircleci, SiTypescript, SiVuedotjs, SiTailwindcss, SiSass, SiSpring, SiMongodb, SiPostgresql, SiGooglecloud } from 'react-icons/si';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  // frontend
  FaReact,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiSass,
  // backend
  FaNodeJs,
  FaPython,
  FaJava,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  // tools
  FaGit,
  FaDocker,
  FaAws,
  SiCircleci,
};

const Skills = () => {
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const toolsSkills = skills.filter(s => s.category === 'tools');

  const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-3">
          {skill.icon && (() => {
            const Icon = iconMap[skill.icon];
            return Icon ? <Icon className="w-5 h-5 text-primary mr-5" aria-hidden /> : null;
          })()}
          <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tools and technologies I work with regularly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-darkCard rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-primary">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="bg-white dark:bg-darkCard rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-primary">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="bg-white dark:bg-darkCard rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-primary">Tools & Technologies</h3>
            {toolsSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
