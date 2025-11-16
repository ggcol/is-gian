import React from 'react';
import featureFlags from '../config/featureFlags';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home', flag: 'hero' },
    { name: 'About', href: '#about', flag: 'about' },
    { name: 'Passions', href: '#passions', flag: 'passions' },
    { name: 'Professional', href: '#professional', flag: 'professionalJourney' },
    { name: 'Projects', href: '#projects', flag: 'projects' },
    { name: 'Skills', href: '#skills', flag: 'skills' },
    { name: 'Contact', href: '#contact', flag: 'contact' }
  ].filter(link => featureFlags[link.flag]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/gianlucacolombo223'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/ggcol'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:colombo.gg@outlook.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3 className="footer__logo">Gianluca Colombo</h3>
              <p className="footer__tagline">
                Tech Leader & Solution Architect
              </p>
              <p className="footer__description">
                Experienced Technology Leader specializing in .NET ecosystems, cloud architecture, 
                and building scalable enterprise solutions.
              </p>
            </div>

            <div className="footer__links">
              <div className="footer__section">
                <h4 className="footer__section-title">Quick Links</h4>
                <ul className="footer__nav">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => scrollToSection(link.href)}
                        className="footer__nav-link"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer__section">
                <h4 className="footer__section-title">Connect</h4>
                <div className="footer__social">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="footer__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
                <div className="footer__contact-info">
                  <p>Milan, Italy</p>
                  <p>Available for remote work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>
                &copy; {currentYear} Gianluca Colombo. All rights reserved.
              </p>
              <p className="footer__built-with">
                Built with <i className="fas fa-heart"></i> using React & Claude Sonnet
              </p>
            </div>

            <button 
              onClick={scrollToTop}
              className="footer__back-to-top"
              aria-label="Back to top"
            >
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;