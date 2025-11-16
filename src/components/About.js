import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">Who I Am</h2>
        
        <div className="about__content">
          <div className="about__text">
            <div className="about__intro">
              <p>
                I'm someone who believes life is meant to be lived fully. While I spend my days 
                <strong> leading tech teams</strong> and architecting solutions, my heart beats for the 
                <strong> open road</strong>, the perfect craft beer, and the stories we create along the way.
              </p>
              <p>
                From managing a pub where I learned the art of hospitality, to building 
                <strong> 'Casual Roads'</strong> - my passion project connecting motorcycle enthusiasts - 
                I've always been drawn to creating communities and experiences that bring people together.
              </p>
            </div>

            <div className="about__philosophy">
              <div className="about__philosophy-content">
                <h3>My Approach to Life</h3>
                <blockquote>
                  "Whether it's writing clean code, finding the perfect brewery on a motorcycle trip, 
                  or capturing that golden hour shot, I believe in doing things with passion and 
                  authenticity. Every experience teaches us something - and every story is worth sharing."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-number">15+</div>
              <div className="about__stat-label">Countries Explored</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">6+</div>
              <div className="about__stat-label">Years Coding</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">200+</div>
              <div className="about__stat-label">Breweries Visited</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">1</div>
              <div className="about__stat-label">Pub Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;