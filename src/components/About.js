import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { profile } from '../content/profile';

const CountUpMetric = ({ value, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (metricRef.current) {
      observer.observe(metricRef.current);
    }

    return () => {
      if (metricRef.current) {
        observer.unobserve(metricRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div className="about__metric" ref={metricRef}>
      <div className="about__metric-value">{count}{suffix}</div>
      <div className="about__metric-label">{label}</div>
    </div>
  );
};

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
        <h2 className="section-title">Who I Am</h2>
        <div className="about__content">
          <div className="about__left">
            <div className="about__philosophy">
              <div className="about__philosophy-content">
                <blockquote>{profile.narrative.philosophy}</blockquote>
              </div>
            </div>
            <div className="about__image">
              <img src={`${process.env.PUBLIC_URL}/images/about/gian-glenfinnan.jpg`} alt="Gian at Glenfinnan" />
            </div>
          </div>
          <div className="about__right">
            <div className="about__intro">
              {profile.narrative.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
              {profile.narrative.bridge.map((paragraph, index) => (
                <p key={`bridge-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="about__values">
              <h3>Core Values</h3>
              <ul>
                {profile.values.map(v => (
                  <li key={v.key}>{v.label}</li>
                ))}
              </ul>
            </div>
            <div className="about__future">
              <h3>Future Focus</h3>
              {profile.future.map(f => (
                <div key={f.horizon} className="future__horizon">
                  <strong>{f.horizon}</strong>: {f.focus.join(', ')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about__metrics">
        <CountUpMetric value={profile.metrics.yearsBuildingSystems} label="Years Building Systems" />
        <CountUpMetric value={profile.metrics.countriesExplored} label="Countries Explored" />
        <CountUpMetric value={profile.metrics.routesCurated} label="Routes Curated" />
        <CountUpMetric value={profile.metrics.breweriesVisited} label="Breweries Visited" />
        <CountUpMetric value={profile.metrics.pubManaged} label="Pub Owned" suffix="" />
      </div>
    </section>
  );
};

export default About;