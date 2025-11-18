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
            <img src={process.env.PUBLIC_URL + "/images/worked-with/" + logo.src} alt={logo.src.replace('.png', '')} draggable="false" />
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
      title: "Wolford Integration Layer",
      description: "Wolford Integration Layer is a cloud-native enterprise integration platform orchestrating ~200 .NET microservices and Azure Functions on AKS, connecting ERP, logistics, finance, retail and e-commerce domains. It delivers resilient distributed messaging via Azure Service Bus (migrated from a legacy broker, eliminating ~€20K annual licensing), unified observability through Application Insights, and governed delivery with structured Git strategy, automated CI/CD (GitHub Actions) and Clean Architecture conventions, providing predictable releases and a scalable foundation for ongoing ERP modernization.",
      tags: [".NET", "AKS", "Azure Functions", "Azure Service Bus", "SQL Server", "Microservices", "CI/CD"],
      image: process.env.PUBLIC_URL + "/images/project/work/wolford-newton.png",
      link: null
    },
    {
      id: 2,
      title: "Pirelli Design Suite",
      description: "Pirelli Design Suite is a next-generation CAD platform developed for advanced tire design in the R&D department. The application leverages .NET, WPF, and DevDept Eyeshot for high-performance 3D modeling, enabling researchers and engineers to create and visualize tire prototypes with precision. Through architectural and performance optimizations, during platform re-engineering, we've been able to achieve 80% reduction in memory usage, ensuring scalability and maintainability for complex design workflows. Integrated technologies include WCF, MongoDB, Windows IIS, and robust quality assurance with DotMemory and SonarQube.",
      tags: [".NET", "WPF", "WCF", "MongoDB", "IIS", "DevDept Eyeshot", "DotMemory", "SonarQube", "3D Modeling"],
      image: process.env.PUBLIC_URL + "/images/project/work/pirelli-p-zero.jpg",
      link: null
    },
    {
      id: 3,
      title: "ISTA",
      description: "BMW ISTA is a comprehensive vehicle diagnostic platform used by BMW AG to support complex automotive workflows. Built for international teams working in agile environments, ISTA delivers robust diagnostics, service information, and workflow automation for modern vehicles. The system emphasizes clean architecture and maintainability, leveraging .NET, WPF, and Azure to ensure reliability and scalability.",
      tags: [".NET", "WPF", "WCF", "SQLite", "Azure", "Agile (LeSS/Scrum)", "Jenkins", "Atlassian Suite"],
      image: process.env.PUBLIC_URL + "/images/project/work/bmw-ista.jpeg",
      link: null
    },
    {
      id: 4,
      title: "Artigiali / Linea Bianca Group",
      description: "Post-acquisition migration initiative aligning Linea Bianca's established operational tooling with Artigiali's evolving organization. Focused on consolidating services, a mobile application, and supporting server infrastructure while modernizing data access and workflow integration. This project is in early discovery and will be updated as architecture decisions progress. Current scope centers on re-hosting and adapting existing assets for scalability, maintainability and unified governance.",
      tags: [".NET", "EntityFramework", "Angular", "MySQL", "Ubuntu", "Mobile", "Migration"],
      image: process.env.PUBLIC_URL + "/images/project/work/artigiali.jpg",
      link: null
    },
    {
      id: 5,
      title: "Documentary Management",
      description: "Documentary Management is a scalable ASP.NET Core MVC application designed to modernize and replicate Pirelli's documentary workflow. Integrating with SharePoint Online via Microsoft Graph API, the platform provides seamless access and management of historical documents in a robust, up-to-date architectural environment.",
      tags: [".NET", "ASP.NET Core MVC", "MS Graph API", "SharePoint Online", "IIS", "MongoDB", "Document Management"],
      image: process.env.PUBLIC_URL + "/images/project/work/pirelli-logo.png",
      link: null
    }
  ];

  const ossProjects = [
    {
      id: 1,
      title: "ASureBus",
      description: "Open source .NET library simplifying Azure Service Bus with APIs for publish/subscribe, message handlers, and sagas. Actively used in production. Built in C#, using ASB SDKs, distributed via NuGet.",
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
      tags: ["Social Media", "Content Creation", "Community", "Video Production", "Personal"],
      image: process.env.PUBLIC_URL + "/images/project/personal-ss/casual-roads.jpg",
      link: "https://www.instagram.com/casualroads"
    },
    {
      id: 2,
      title: "Drop",
      description: "Super-secret! GCP stack with react native and expo",
      tags: ["GCP", "React Native", "Expo", "Super Secret"],
      image: process.env.PUBLIC_URL + "/images/project/personal-ss/drop.jpg",
      link: null
    },
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
          title="Main Work Projects"
          projects={workProjects}
          icon="fas fa-briefcase"
        />
        <ProjectSection
          title="OSS Projects"
          projects={ossProjects}
          icon="fas fa-code-branch"
        />
        <ProjectSection
          title="Personal / Super Secret Projects"
          projects={personalProjects}
          icon="fas fa-heart"
        />
      </div>
    </section>
  );
};

export default Projects;