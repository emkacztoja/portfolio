import { motion } from 'framer-motion';  
import { ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-gradient">Aleksander</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
        >
          Full Stack Developer & Creative Problem Solver
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build exceptional digital experiences that combine beautiful design with powerful functionality.
          Passionate about creating solutions that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 shadow-lg hover:shadow-primary/50"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-darkCard hover:bg-primary hover:text-white dark:hover:bg-primary transition-all hover:scale-110 text-gray-800 visited:text-gray-800 dark:text-white dark:visited:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 text-current fill-current" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-darkCard hover:bg-primary hover:text-white dark:hover:bg-primary transition-all hover:scale-110 text-gray-800 visited:text-gray-800 dark:text-white dark:visited:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 text-current fill-current" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-darkCard hover:bg-primary hover:text-white dark:hover:bg-primary transition-all hover:scale-110 text-gray-800 visited:text-gray-800 dark:text-white dark:visited:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6 text-current fill-current" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
