import React, { useEffect, useRef } from 'react';
import './Passions.css';
import { profile } from '../content/profile';

const Passions = () => {
  const passionsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('passions--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (passionsRef.current) {
      observer.observe(passionsRef.current);
    }

    return () => {
      if (passionsRef.current) {
        observer.unobserve(passionsRef.current);
      }
    };
  }, []);

  const iconMap = {
    motorcycling: 'fas fa-motorcycle',
    'craft-beverage': 'fas fa-beer',
    music: 'fas fa-music',
    photography: 'fas fa-camera',
    bbq: 'fas fa-fire',
    reading: 'fas fa-book'
  };

  return (
    <section id="passions" className="section passions" ref={passionsRef}>
      <div className="container">
        <h2 className="section-title">My World Beyond Code</h2>
        <p className="passions__subtitle">
          Life is about collecting experiences, not just achievements. Here's what fuels my soul.
        </p>
        <div className="passions__grid">
          {profile.passions.map((p, idx) => {
            const metrics = p.metrics || {};
            const links = p.links || [];
            return (
              <div
                key={p.id}
                className={`passion__card ${idx === 0 ? 'passion__card--featured' : ''}`}
              >
                <div className="passion__icon">
                  <i className={iconMap[p.id] || 'fas fa-star'}></i>
                </div>
                <h3>{p.title}</h3>
                {p.tagline && <p className="passion__tagline"><em>{p.tagline}</em></p>}
                <p>{p.summary}</p>
                {Object.keys(metrics).length > 0 && (
                  <div className="passion__metrics">
                    {Object.entries(metrics).map(([k, v]) => (
                      <span key={k}>{Array.isArray(v) ? v.join(', ') : v}</span>
                    ))}
                  </div>
                )}
                {p.tags && (
                  <div className="passion__tags">
                    {p.tags.map(t => (
                      <span key={t} className="passion__tag">{t}</span>
                    ))}
                  </div>
                )}
                {links.length > 0 && (
                  <div className="passion__links">
                    {links.map(l => (
                      <a key={l.label} href={l.url} className="passion__link">
                        <i className={l.icon}></i> {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="passions__cta">
          <h3>Let's Connect Over Shared Passions</h3>
          <p>
            Whether you want to talk tech, plan a motorcycle route, recommend a great brewery,
            or just share stories - I'm always up for a good conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Passions;
