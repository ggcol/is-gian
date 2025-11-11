import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('skills--visible');
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skills__bar-fill');
            skillBars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage');
              bar.style.width = percentage + '%';
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: '.NET Framework/.NET Core', level: 95, category: 'backend' },
    { name: 'C#', level: 95, category: 'language' },
    { name: 'Azure Cloud Platform', level: 88, category: 'cloud' },
    { name: 'SQL Server/Azure SQL', level: 90, category: 'database' },
    { name: 'ASP.NET Core Web APIs', level: 93, category: 'api' },
    { name: 'Entity Framework Core', level: 90, category: 'orm' },
    { name: 'Angular/React', level: 80, category: 'frontend' },
    { name: 'Docker & DevOps', level: 75, category: 'devops' },
    { name: 'Microservices Architecture', level: 85, category: 'architecture' },
    { name: 'Azure DevOps/TFS', level: 85, category: 'tools' }
  ];

  const softSkills = [
    { name: 'Team Leadership', level: 95 },
    { name: 'Solution Architecture', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Mentoring', level: 88 },
    { name: 'Strategic Planning', level: 85 },
    { name: 'Client Communication', level: 92 }
  ];

  const categories = {
    'backend': { icon: 'fas fa-server', color: '#3b82f6' },
    'frontend': { icon: 'fab fa-react', color: '#06b6d4' },
    'language': { icon: 'fas fa-code', color: '#8b5cf6' },
    'cloud': { icon: 'fas fa-cloud', color: '#10b981' },
    'database': { icon: 'fas fa-database', color: '#f59e0b' },
    'orm': { icon: 'fas fa-layer-group', color: '#ef4444' },
    'devops': { icon: 'fas fa-cogs', color: '#6366f1' },
    'architecture': { icon: 'fas fa-sitemap', color: '#ec4899' },
    'api': { icon: 'fas fa-plug', color: '#14b8a6' },
    'tools': { icon: 'fas fa-tools', color: '#f97316' }
  };

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills__content">
          <div className="skills__technical">
            <h3 className="skills__category-title">
              <i className="fas fa-code"></i>
              Technical Skills
            </h3>
            
            <div className="skills__grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skills__item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skills__item-header">
                    <div className="skills__item-info">
                      <div className="skills__item-icon" style={{ color: categories[skill.category]?.color }}>
                        <i className={categories[skill.category]?.icon}></i>
                      </div>
                      <span className="skills__item-name">{skill.name}</span>
                    </div>
                    <span className="skills__item-percentage">{skill.level}%</span>
                  </div>
                  <div className="skills__bar">
                    <div 
                      className="skills__bar-fill" 
                      data-percentage={skill.level}
                      style={{ backgroundColor: categories[skill.category]?.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__soft">
            <h3 className="skills__category-title">
              <i className="fas fa-users"></i>
              Leadership & Soft Skills
            </h3>
            
            <div className="skills__soft-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="skills__soft-item" style={{ animationDelay: `${(index + 10) * 0.1}s` }}>
                  <div className="skills__soft-content">
                    <h4>{skill.name}</h4>
                    <div className="skills__soft-level">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`skills__soft-star ${i < Math.round(skill.level / 20) ? 'skills__soft-star--filled' : ''}`}
                        >
                          <i className="fas fa-star"></i>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skills__soft-percentage">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills__certifications">
          <h3 className="skills__category-title">
            <i className="fas fa-certificate"></i>
            Certifications & Learning
          </h3>
          
          <div className="skills__cert-grid">
            <div className="skills__cert-item">
              <div className="skills__cert-icon">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="skills__cert-content">
                <h4>Microsoft Certified</h4>
                <p>Azure Solutions Architect Expert</p>
              </div>
            </div>
            
            <div className="skills__cert-item">
              <div className="skills__cert-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="skills__cert-content">
                <h4>Continuous Learning</h4>
                <p>Always exploring new technologies</p>
              </div>
            </div>
            
            <div className="skills__cert-item">
              <div className="skills__cert-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <div className="skills__cert-content">
                <h4>Leadership Training</h4>
                <p>Team management & mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;