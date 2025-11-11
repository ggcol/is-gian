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
        <h2 className="section-title">About Me</h2>
        
        <div className="about__content">
          <div className="about__text">
            <div className="about__intro">
              <p>
                I'm a passionate <strong>Tech Lead</strong> and <strong>Solution Architect</strong> with over 
                10 years of experience in software development, specializing in Microsoft technologies and cloud solutions.
              </p>
              <p>
                My expertise spans <strong>.NET framework and .NET Core</strong>, <strong>Azure cloud services</strong>, 
                and modern software architecture patterns. I have successfully led cross-functional teams and delivered 
                complex enterprise solutions across various industries including finance, healthcare, and e-commerce.
              </p>
            </div>

            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="about__highlight-content">
                  <h3>Team Leadership</h3>
                  <p>Leading cross-functional teams and mentoring developers to achieve project excellence</p>
                </div>
              </div>

              <div className="about__highlight">
                <div className="about__highlight-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="about__highlight-content">
                  <h3>Solution Architecture</h3>
                  <p>Designing scalable, maintainable systems that solve complex business challenges</p>
                </div>
              </div>

              <div className="about__highlight">
                <div className="about__highlight-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="about__highlight-content">
                  <h3>.NET Expertise</h3>
                  <p>Deep knowledge of .NET framework, C#, and modern development practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-number">10+</div>
              <div className="about__stat-label">Years Experience</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">25+</div>
              <div className="about__stat-label">Projects Delivered</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">8+</div>
              <div className="about__stat-label">Team Members Led</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">5+</div>
              <div className="about__stat-label">Years in Leadership</div>
            </div>
          </div>
        </div>

        <div className="about__philosophy">
          <div className="about__philosophy-content">
            <h3>My Philosophy</h3>
            <blockquote>
              "Great software is built by great teams. My role is to create an environment where 
              innovation thrives, code quality is paramount, and every team member can contribute 
              their best work to solve meaningful problems."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;