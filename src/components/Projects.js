import React, { useEffect, useRef } from 'react';

const workedWithLogos = [
  { src: "1nnovation.png", url: "https://1nnovation.net" },
  { src: "accenture.png", url: "https://www.accenture.com/" },
  { src: "akkodis.png", url: "https://www.akkodis.com/it" },
  { src: "artigiali.png", url: "https://www.artigiali.it" },
  { src: "avanade.png", url: "https://www.avanade.com/" },
  { src: "blazar.png", url: "https://blazargroup.com/it/" },
  { src: "bmw.png", url: "https://www.bmw.com/en/index.html" },
  { src: "linea-bianca.png", url: "https://www.lineabiancasrl.it" },
  { src: "lobra.png", url: "https://www.lobrafutura.com" },
  { src: "mmsolutions.png", url: "https://www.mmsolutionssrl.com" },
  { src: "pirelli.png", url: "https://www.pirelli.com/" },
  { src: "reply-cluster.png", url: "https://www.reply.com/cluster-reply-italy/it" },
  { src: "wolford.png", url: "https://company.wolford.com/investor-relations-2/corporate-governance/" },
];

const WorkedWithCarousel = () => (
  <div className="worked-with-carousel">
    <div className="worked-with-track">
      {[...workedWithLogos, ...workedWithLogos].map((logo, idx) => (
        <div className="worked-with-logo" key={idx}>
          <a href={logo.url} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/worked-with/" + logo.src} alt={logo.src.replace('.png','')} draggable="false" />
          </a>
        </div>
      ))}
    </div>
  </div>
);
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef();

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

  const workProjects = [
    {
      id: 1,
      title: "Vivaldi Group",
      description: "Enterprise-level digital transformation project for Vivaldi Group, implementing modern cloud infrastructure and scalable solutions.",
      tags: [".NET", "Azure", "Microservices", "DevOps"],
      link: null
    },
    {
      id: 2,
      title: "Wolford Integration Layer",
      description: "Integration layer connecting Wolford's e-commerce platform with Newton ERP system, enabling seamless data synchronization and real-time inventory management.",
      tags: [".NET Core", "Azure", "REST API", "Integration"],
      image: process.env.PUBLIC_URL + "/images/project/work/wolford-newton.png",
      link: null
    },
    {
      id: 3,
      title: "Pirelli Design Suite",
      description: "Advanced design and configuration platform for Pirelli P Zero tires, allowing customers to customize and visualize tire designs in real-time.",
      tags: ["Angular", ".NET", "Azure", "3D Visualization"],
      image: process.env.PUBLIC_URL + "/images/project/work/pirelli-p-zero.jpg",
      link: null
    },
    {
      id: 4,
      title: "Documentary Management",
      description: "Digital archive management system for Pirelli's historical documents and heritage materials, featuring advanced search and preservation capabilities.",
      tags: [".NET", "Azure Storage", "Document Management", "Search"],
      image: process.env.PUBLIC_URL + "/images/project/work/pirelli-logo.png",
      link: null
    },
    {
      id: 5,
      title: "ISTA",
      description: "BMW ISTA is a comprehensive vehicle diagnostic platform used by BMW AG to support complex automotive workflows. Built for international teams working in agile environments, ISTA delivers robust diagnostics, service information, and workflow automation for modern vehicles. The system emphasizes clean architecture and maintainability, leveraging .NET, WPF, and Azure to ensure reliability and scalability.",
      tags: [".NET", "WPF", "WCF", "SQLite", "Azure", "Agile (LeSS/Scrum)", "Jenkins", "Atlassian Suite"],
      image: process.env.PUBLIC_URL + "/images/project/work/bmw-ista.jpeg",
      link: null
    }
  ];

  const ossProjects = [
    {
      id: 1,
      title: "ASureBus",
      description: "Open source service bus implementation for Azure, providing reliable message processing and event-driven architecture patterns.",
      tags: [".NET", "Azure Service Bus", "Open Source", "Messaging"],
      image: process.env.PUBLIC_URL + "/images/project/oss/asurebus.png",
      link: "https://github.com/ggcol/ASureBus"
    },
    {
      id: 2,
      title: "Console Invaded",
      description: "Console-based game framework bringing classic arcade gaming experience to the terminal with modern .NET capabilities.",
      tags: [".NET", "Game Development", "Console", "Open Source"],
      image: process.env.PUBLIC_URL + "/images/project/oss/console-invaded.png",
      link: "https://github.com/ggcol/console-invaded"
    }
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Casual Roads - Motorcycle Community",
      description: "Building a social community for motorcycle enthusiasts through Instagram and YouTube. Sharing scenic routes, hidden gems, and the philosophy of embracing the journey over the destination.",
      tags: ["Social Media", "Content Creation", "Community", "Video Production"],
      image: process.env.PUBLIC_URL + "/images/projects/casual-roads.jpg",
      link: "https://instagram.com/casual.roads"
    },
    // Add more personal projects here
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      {project.image && (
        <div className="project-card__image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-card__tag">{tag}</span>
            ))}
          </div>
        )}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card__link"
          >
            View Project <i className="fas fa-external-link-alt"></i>
          </a>
        )}
      </div>
    </div>
  );

  const ProjectSection = ({ title, projects, icon }) => (
    <div className="project-section">
      <h3 className="project-section__title">
        <i className={icon}></i>
        {title}
      </h3>
      <div className="project-section__carousel">
        <div className="project-section__track">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="worked-with-title">Worked with</div>
        <WorkedWithCarousel />
        <ProjectSection 
          title="Work Projects" 
          projects={workProjects}
          icon="fas fa-briefcase"
        />
        <ProjectSection 
          title="OSS Projects" 
          projects={ossProjects}
          icon="fas fa-code-branch"
        />
        <ProjectSection 
          title="Personal Projects" 
          projects={personalProjects}
          icon="fas fa-heart"
        />
      </div>
    </section>
  );
};

export default Projects;