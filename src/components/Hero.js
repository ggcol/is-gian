import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__background">
        <div className="hero__background-shape hero__background-shape--1"></div>
        <div className="hero__background-shape hero__background-shape--2"></div>
        <div className="hero__background-shape hero__background-shape--3"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <span>🏍️ Ciao! I'm</span>
            </div>
            <h1 className="hero__title">
              <span className="hero__name">Gianluca Colombo</span>
              <span className="hero__role">Tech Leader, Road Explorer & Life Enthusiast</span>
            </h1>
            <p className="hero__description">
              When I'm not architecting software solutions and leading development teams, you'll find me exploring 
              winding roads on my motorcycle, discovering craft breweries across Europe, or capturing moments through 
              my lens. Welcome to my world where technology meets passion.
            </p>
            <div className="hero__cta">
              <button onClick={() => scrollToSection('passions')} className="btn btn-primary">
                Explore My World
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                Let's Connect
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__avatar">
              <img 
                src="/is-gian/images/hero-avatar.jpeg" 
                alt="Gianluca Colombo" 
                className="hero__avatar-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hero__avatar-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="hero__interests">
              <div className="hero__interest-item">
                <i className="fas fa-motorcycle"></i>
                <span>Motorcycling</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-beer"></i>
                <span>Craft Beer</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-camera"></i>
                <span>Photography</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-music"></i>
                <span>Music</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-code"></i>
                <span>Technology</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-book"></i>
                <span>Books</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;