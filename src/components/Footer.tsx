import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-gray-400 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Aleksander Kowalczuk</h3>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-transform hover:scale-110 text-white visited:text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-white dark:text-white fill-current" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-transform hover:scale-110 text-white visited:text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-white dark:text-white fill-current" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-transform hover:scale-110 text-white visited:text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6 text-white dark:text-white fill-current" />
            </a>
          </div>

          <div className="pt-6 border-t border-gray-800 w-full">
            <p className="flex items-center justify-center gap-2">
              © 2025 Aleksander Kowalczuk. All rights reserved. Made with{' '}
              <FaHeart className="w-4 h-4 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
