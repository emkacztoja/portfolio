import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // compute a translucent background depending on theme so header stands out
  const headerStyle: React.CSSProperties = {
    backgroundColor: theme === 'dark' ? 'rgba(10,10,10,0.6)' : 'rgba(255,255,255,0.85)',
    color: 'var(--text)',
    borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
    boxShadow: theme === 'dark' ? '0 6px 18px rgba(0,0,0,0.6)' : '0 6px 18px rgba(0,0,0,0.06)'
  };

  return (
    <header
      className="site-header fixed top-0 w-full z-50 backdrop-blur-md"
      style={headerStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">
              Aleksander Kowalczuk
            </div>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors relative group focus:outline-none header-nav-btn"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className="p-1 focus:outline-none theme-toggle"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1 focus:outline-none theme-toggle"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" style={headerStyle}>
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none header-nav-btn"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
