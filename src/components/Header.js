import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import featureFlags from '../config/featureFlags';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {featureFlags.hero && <li><button onClick={() => scrollToSection('home')} className="header__nav-link">Home</button></li>}
              {featureFlags.about && <li><button onClick={() => scrollToSection('about')} className="header__nav-link">About</button></li>}
              {featureFlags.passions && <li><button onClick={() => scrollToSection('passions')} className="header__nav-link">Passions</button></li>}
              {featureFlags.professionalJourney && <li><button onClick={() => scrollToSection('professional')} className="header__nav-link">Professional</button></li>}
              {featureFlags.projects && <li><button onClick={() => scrollToSection('projects')} className="header__nav-link">Projects</button></li>}
              {featureFlags.contact && <li><button onClick={() => scrollToSection('contact')} className="header__nav-link">Contact</button></li>}
            </ul>
          </nav>

          <div className="header__actions">
            {featureFlags.downloadCV && (
              <a 
                href="https://stcvita.blob.core.windows.net/cv-main/latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="header__cv-link"
                title="Download CV"
              >
                <i className="fas fa-download"></i>
                <span>CV</span>
              </a>
            )}
            <button 
              onClick={toggleTheme}
              className="header__theme-toggle"
              aria-label="Toggle dark mode"
            >
              <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
            </button>

            <button 
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;