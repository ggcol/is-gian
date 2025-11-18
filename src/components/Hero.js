import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const avatarImages = [
    '/is-gian/images/hero-avatars/avatar-1.jpeg',
    '/is-gian/images/hero-avatars/avatar-2.jpg',
    '/is-gian/images/hero-avatars/avatar-3.jpg',
    '/is-gian/images/hero-avatars/avatar-4.png',
    '/is-gian/images/hero-avatars/avatar-5.png',
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % avatarImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [avatarImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/hero-bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section id="home" className="hero" ref={heroRef} style={heroBgStyle}>
      <div className="hero__background">
        <div className="hero__background-shape hero__background-shape--1"></div>
        <div className="hero__background-shape hero__background-shape--2"></div>
        <div className="hero__background-shape hero__background-shape--3"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <span>👋🏼 Hey! I'm</span>
            </div>
            <h1 className="hero__title">
              <span className="hero__name">Gianluca Colombo</span>
              <span className="hero__role">Tech Leader, Road Explorer & Life Enthusiast</span>
            </h1>
            <p className="hero__description">
              {/* When I'm not architecting software solutions and leading development teams, you'll find me exploring 
              winding roads on my motorcycle, discovering craft breweries across Europe, or capturing moments through 
              my lens. Welcome to my world where technology meets passion. */}

              Architecting solutions and leading development teams may be quite stressfull, and when that happens,
              a fresh breath of open, winding, road or the perfect pint are often providing the right balance.
              Then, back to code!
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
              {avatarImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Gianluca Colombo ${index + 1}`}
                  className={`hero__avatar-image ${index === currentImageIndex ? 'hero__avatar-image--active' : ''}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ))}
              <div className="hero__avatar-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="hero__interests">
              <div className="hero__interest-item">
                <i className="fas fa-code"></i>
                <span className="hero__interest-code">Technology</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-motorcycle"></i>
                <span className="hero__interest-code">Motorcycling</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-beer"></i>
                <span className="hero__interest-code">Craft Beer</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-camera"></i>
                <span className="hero__interest-code">Photography</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-music"></i>
                <span className="hero__interest-code">Music</span>
              </div>
              <div className="hero__interest-item">
                <i className="fas fa-book"></i>
                <span className="hero__interest-code">Books</span>
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