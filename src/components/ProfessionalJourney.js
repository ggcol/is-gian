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
                <span>.NET</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-apple"></i>
                <span>Apple</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-cloud"></i>
                <span>Azure</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="journey__tech-item">
                <i className="fab fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-dharmachakra"></i>
                <span>Kubernetes</span>
              </div>
              <div className="journey__tech-item">
                <i className="fas fa-database"></i>
                <span>SQL Server</span>
              </div>
            </div>
          </div>

          <div className="journey__certifications">
            <h3>Certifications</h3>
            <div className="journey__cert-grid">
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/1F21C5CA5E1D4076?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item journey__cert-item--expert"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-expert.png`} alt="Expert Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>Azure Solutions Architect Expert</h4>
                  <span className="journey__cert-code">AZ-305</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/A2C952EFD9680D28?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item journey__cert-item--expert"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-expert.png`} alt="Expert Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>DevOps Engineer Expert</h4>
                  <span className="journey__cert-code">AZ-400</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/4CB6365B7A536E51?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-associate.png`} alt="Associate Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>Azure Administrator Associate</h4>
                  <span className="journey__cert-code">AZ-104</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/E0D1F30E960F0A95?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-associate.png`} alt="Associate Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>Azure Developer Associate</h4>
                  <span className="journey__cert-code">AZ-204</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/79FAD44CD278C456?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-fundamentals.png`} alt="Fundamentals Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>Azure Data Fundamentals</h4>
                  <span className="journey__cert-code">DP-900</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/CB93394D28387874?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/cert-fundamentals.png`} alt="Fundamentals Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>Azure Fundamentals</h4>
                  <span className="journey__cert-code">AZ-900</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-gb/red-9033/DAD1638A526B043C?sharingId=B92468F13C38F258"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/gh-admin.png`} alt="GitHub Admin Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>GitHub Administration</h4>
                  <span className="journey__cert-code">GH-100</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>

              <a 
                href="https://www.efset.org/cert/p8YBiV"
                target="_blank"
                rel="noopener noreferrer"
                className="journey__cert-item"
              >
                <div className="journey__cert-badge">
                  <img src={`${process.env.PUBLIC_URL}/images/cert/ef-set-logo.png`} alt="EF SET Badge" />
                </div>
                <div className="journey__cert-content">
                  <h4>EF SET English Certificate</h4>
                  <span className="journey__cert-code">C2 Proficient</span>
                </div>
                <i className="fas fa-external-link-alt journey__cert-link-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;