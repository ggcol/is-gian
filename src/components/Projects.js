import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('projects--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    // Personal Projects
    {
      id: 1,
      title: "Casual Roads - Motorcycle Community",
      description: "Building a social community for motorcycle enthusiasts through Instagram and YouTube. Sharing scenic routes, hidden gems, and the philosophy of embracing the journey over the destination. Growing organically through authentic storytelling and rider connections.",
      category: "personal",
      technologies: ["Social Media Strategy", "Content Creation", "Community Building", "Video Production"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Casual+Roads",
      instagram: "https://instagram.com/casual.roads",
      youtube: "#",
      featured: true,
      isPersonal: true
    },
    {
      id: 2,
      title: "European Brewery Discovery Journey",
      description: "Personal project documenting craft beer culture across Europe. Combining my pub management experience with travel photography to showcase brewery stories, local traditions, and the craft behind exceptional beer.",
      category: "personal",
      technologies: ["Photography", "Content Curation", "Cultural Documentation", "Travel Planning"],
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Brewery+Journey",
      portfolio: "#",
      featured: false,
      isPersonal: true
    },
    // Professional Projects
    {
      id: 3,
      title: "Enterprise Document Management System",
      description: "Led the development of a comprehensive document management platform for healthcare organizations. Implemented secure document storage, workflow automation, and compliance features using .NET Core and Azure.",
      category: "fullstack",
      technologies: [".NET Core", "Azure SQL", "Angular", "Azure Storage", "SignalR"],
      image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Document+Management",
      github: "#",
      demo: "#",
      featured: true,
      isPersonal: false
    },
    {
      id: 4,
      title: "Financial Trading Platform API",
      description: "Architected and developed high-performance RESTful APIs for a financial trading platform. Handled real-time market data processing and secure transaction management with sub-millisecond response times.",
      category: "backend",
      technologies: ["ASP.NET Core", "Entity Framework", "Redis", "SQL Server", "Azure"],
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Trading+API",
      github: "#",
      demo: "#",
      featured: false,
      isPersonal: false
    },
    {
      id: 5,
      title: "Cloud Migration Initiative",
      description: "Led the migration of legacy on-premises applications to Azure cloud infrastructure. Implemented containerization, automated deployments, and monitoring solutions reducing operational costs by 40%.",
      category: "devops",
      technologies: ["Azure DevOps", "Docker", "Azure App Service", "ARM Templates", "Application Insights"],
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Cloud+Migration",
      github: "#",
      demo: "#",
      featured: false,
      isPersonal: false
    },
    {
      id: 6,
      title: "E-commerce Inventory Management",
      description: "Built a scalable inventory management system for e-commerce platforms with real-time stock tracking, automated reordering, and multi-warehouse support.",
      category: "fullstack",
      technologies: ["ASP.NET Core", "Entity Framework Core", "Angular", "Azure SQL", "Azure Service Bus"],
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Inventory+System",
      github: "#",
      demo: "#",
      featured: false,
      isPersonal: false
    },
    {
      id: 7,
      title: "Healthcare Data Analytics Platform",
      description: "Developed a comprehensive analytics platform for healthcare providers to analyze patient data, generate insights, and improve care outcomes while ensuring HIPAA compliance.",
      category: "fullstack",
      technologies: [".NET Core", "Azure Synapse", "Power BI", "Angular", "Azure Security"],
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Healthcare+Analytics",
      github: "#",
      demo: "#",
      featured: true,
      isPersonal: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { id: 'personal', label: 'Personal', icon: 'fas fa-heart' },
    { id: 'architecture', label: 'Architecture', icon: 'fas fa-sitemap' },
    { id: 'fullstack', label: 'Full Stack', icon: 'fas fa-layer-group' },
    { id: 'backend', label: 'Backend', icon: 'fas fa-server' },
    { id: 'devops', label: 'DevOps', icon: 'fas fa-cogs' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects & Creations</h2>
        
        {/* Featured Projects */}
        <div className="projects__featured">
          <div className="projects__featured-grid">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="projects__featured-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="projects__featured-image">
                  <img src={project.image} alt={project.title} />
                  <div className="projects__featured-overlay">
                    <div className="projects__featured-links">
                      {project.github && (
                        <a href={project.github} className="projects__link projects__link--github">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {project.instagram && (
                        <a href={project.instagram} className="projects__link projects__link--instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {project.youtube && (
                        <a href={project.youtube} className="projects__link projects__link--youtube">
                          <i className="fab fa-youtube"></i>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="projects__link projects__link--demo">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.portfolio && (
                        <a href={project.portfolio} className="projects__link projects__link--portfolio">
                          <i className="fas fa-images"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="projects__featured-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="projects__technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="projects__tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="projects__tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="projects__all">
          <h3 className="projects__subtitle">All Projects</h3>
          
          <div className="projects__filters">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`projects__filter-btn ${filter === category.id ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <i className={category.icon}></i>
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="projects__item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="projects__item-image">
                  <img src={project.image} alt={project.title} />
                  <div className="projects__item-overlay">
                    <div className="projects__item-links">
                      {project.github && (
                        <a href={project.github} className="projects__link">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {project.instagram && (
                        <a href={project.instagram} className="projects__link">
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {project.youtube && (
                        <a href={project.youtube} className="projects__link">
                          <i className="fab fa-youtube"></i>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="projects__link">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.portfolio && (
                        <a href={project.portfolio} className="projects__link">
                          <i className="fas fa-images"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="projects__item-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="projects__technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="projects__tech-tag projects__tech-tag--small">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;