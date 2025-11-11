import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just show an alert
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:colombo.gg@outlook.com',
      color: '#ea4335'
    },
    {
      name: 'Azure DevOps',
      icon: 'fab fa-microsoft',
      url: '#',
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

        <div className="contact__content">
          <div className="contact__info">
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
              <h4>Follow Me</h4>
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

          <div className="contact__form">
            <h3 className="contact__form-title">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="contact__form-container">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project collaboration opportunity"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or what you'd like to discuss..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary contact__form-submit">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact__cta">
          <div className="contact__cta-content">
            <h3>Ready to start a project?</h3>
            <p>
              I'm currently available for new opportunities and would love to discuss 
              how we can work together to bring your ideas to life.
            </p>
            <a href="mailto:colombo.gg@outlook.com" className="btn btn-outline">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;