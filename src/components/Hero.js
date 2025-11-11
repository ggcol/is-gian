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
              <span>👋 Hello, I'm</span>
            </div>
            <h1 className="hero__title">
              <span className="hero__name">Gianluca Colombo</span>
              <span className="hero__role">Tech Lead & Solution Architect</span>
            </h1>
            <p className="hero__description">
              Experienced Technology Leader with 10+ years in software development, specializing in .NET ecosystems, 
              cloud architecture, and team leadership. Passionate about delivering scalable solutions and fostering 
              high-performing development teams.
            </p>
            <div className="hero__cta">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__avatar">
              <div className="hero__avatar-placeholder">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="hero__tech-stack">
              <div className="hero__tech-item">
                <i className="fab fa-microsoft"></i>
                <span>.NET</span>
              </div>
              <div className="hero__tech-item">
                <i className="fas fa-cloud"></i>
                <span>Azure</span>
              </div>
              <div className="hero__tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
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