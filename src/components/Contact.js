import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/gianlucacolombo223',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/ggcol',
      color: '#333'
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.com/users/1253323452471836733',
      color: '#5865F2'
    },
    {
      name: 'Telegram',
      icon: 'fab fa-telegram-plane',
      url: 'https://t.me/theredrover',
      color: '#0088cc'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:colombo.gg@outlook.com',
      color: '#ea4335'
    },
    {
      name: 'Microsoft Learn',
      icon: 'fab fa-microsoft',
      url: 'https://learn.microsoft.com/en-gb/users/red-9033/transcript/7kwpeul331n89mn',
      color: '#0078d4'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Milan, Italy',
      subtitle: 'Open to remote opportunities'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Availability',
      value: 'Open to new opportunities',
      subtitle: 'Tech Lead & Architect roles'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'colombo.gg@outlook.com',
      subtitle: 'Best way to reach me'
    }
  ];

  return (
    <section id="contact" className="section contact" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact__intro">
          <p>
            I'm currently exploring new opportunities in technology leadership and solution architecture. 
            With my expertise in .NET ecosystems, cloud technologies, and team leadership, 
            I'm ready to help drive your next innovative project forward.
          </p>
        </div>

        <div className="contact__content contact__content--centered">
          <div className="contact__info contact__info--full">
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              Interested in discussing technology, architecture, or potential collaboration? 
              I'd love to connect and explore how we can work together.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__info-item">
                  <div className="contact__info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact__info-content">
                    <h4>{info.title}</h4>
                    <p className="contact__info-value">{info.value}</p>
                    <p className="contact__info-subtitle">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__social">
              <div className="contact__social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="contact__social-link"
                    style={{ '--social-color': link.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;