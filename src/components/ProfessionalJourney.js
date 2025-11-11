import React, { useEffect, useRef } from 'react';
import './ProfessionalJourney.css';

const ProfessionalJourney = () => {
  const journeyRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('journey--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current);
      }
    };
  }, []);

  return (
    <section id="professional" className="section journey" ref={journeyRef}>
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        
        <div className="journey__content">
          <div className="journey__intro">
            <p>
              With over <strong>10 years in technology</strong>, I've evolved from a passionate developer 
              into a <strong>Tech Lead and Solution Architect</strong> who thrives on building great teams 
              and scalable solutions.
            </p>
          </div>

          <div className="journey__highlights">
            <div className="journey__highlight">
              <div className="journey__highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="journey__highlight-content">
                <h3>Team Leadership</h3>
                <p>Leading cross-functional teams and mentoring developers to achieve excellence</p>
              </div>
            </div>

            <div className="journey__highlight">
              <div className="journey__highlight-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="journey__highlight-content">
                <h3>Solution Architecture</h3>
                <p>Designing scalable systems for finance, healthcare, and e-commerce</p>
              </div>
            </div>

            <div className="journey__highlight">
              <div className="journey__highlight-icon">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="journey__highlight-content">
                <h3>.NET & Azure Expert</h3>
                <p>Deep expertise in Microsoft technologies and cloud solutions</p>
              </div>
            </div>
          </div>

          <div className="journey__tech-stack">
            <h3>Technologies I Love Working With</h3>
            <div className="journey__tech-grid">
              <div className="journey__tech-item">
                <i className="fab fa-microsoft"></i>
                <span>.NET Core</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-cloud"></i>
                <span>Azure</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-database"></i>
                <span>SQL Server</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-code-branch"></i>
                <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;