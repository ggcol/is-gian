import React, { useEffect, useRef } from 'react';
import './Passions.css';

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

  return (
    <section id="passions" className="section passions" ref={passionsRef}>
      <div className="container">
        <h2 className="section-title">My World Beyond Code</h2>
        <p className="passions__subtitle">
          Life is about collecting experiences, not just achievements. Here's what fuels my soul.
        </p>
        
        <div className="passions__grid">
          
          {/* Motorcycling */}
          <div className="passion__card passion__card--featured">
            <div className="passion__icon">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h3>Motorcycling & Casual Roads</h3>
            <p>
              The open road is my therapy. Through <strong>Casual Roads</strong>, I'm building a community 
              of riders who share my passion for discovering hidden gems, scenic routes, and the stories 
              that unfold when we embrace the journey over the destination.
            </p>
            <div className="passion__links">
              <a href="#" className="passion__link">
                <i className="fab fa-instagram"></i> @casual.roads
              </a>
              <a href="#" className="passion__link">
                <i className="fab fa-youtube"></i> Casual Roads
              </a>
            </div>
          </div>

          {/* Craft Beer & Whiskey */}
          <div className="passion__card">
            <div className="passion__icon">
              <i className="fas fa-beer"></i>
            </div>
            <h3>Craft Beer & Whiskey Adventures</h3>
            <p>
              From owning and managing a pub to road-tripping across Europe discovering local breweries 
              and distilleries, I've learned that every pour tells a story. It's about the craft, 
              the culture, and the conversations that flow.
            </p>
            <div className="passion__stats">
              <span>🍺 50+ Breweries Visited</span>
              <span>🥃 1 Pub Managed</span>
            </div>
          </div>

          {/* Music */}
          <div className="passion__card">
            <div className="passion__icon">
              <i className="fas fa-music"></i>
            </div>
            <h3>Music & Instruments</h3>
            <p>
              Whether I'm listening to discover new artists or picking up my guitar, music is my 
              constant companion. It's the soundtrack to my rides, the background to my coding sessions, 
              and the rhythm that keeps life interesting.
            </p>
            <div className="passion__instruments">
              <span>🎸 Guitar</span>
              <span>🎹 Piano</span>
              <span>🎵 Multi-instrumentalist</span>
            </div>
          </div>

          {/* Photography */}
          <div className="passion__card">
            <div className="passion__icon">
              <i className="fas fa-camera"></i>
            </div>
            <h3>Travel Photography</h3>
            <p>
              Every journey deserves to be remembered. Through my lens, I capture the essence of places, 
              people, and moments that might otherwise fade. From mountain curves to brewery corners, 
              each shot tells part of my story.
            </p>
            <div className="passion__gear">
              <span>📸 Always Ready</span>
              <span>🌍 Stories from the Road</span>
            </div>
          </div>

          {/* BBQ */}
          <div className="passion__card">
            <div className="passion__icon">
              <i className="fas fa-fire"></i>
            </div>
            <h3>BBQ & Culinary Arts</h3>
            <p>
              There's something primal and satisfying about cooking over fire. BBQ taught me patience, 
              timing, and that the best things in life are worth waiting for. Plus, great food brings 
              great people together.
            </p>
            <div className="passion__flavors">
              <span>🔥 Low & Slow</span>
              <span>🥩 Perfect Timing</span>
            </div>
          </div>

          {/* Reading */}
          <div className="passion__card">
            <div className="passion__icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Reading & Learning</h3>
            <p>
              Books are portals to different worlds and perspectives. Whether it's technical knowledge, 
              philosophy, travel narratives, or just a good story, reading keeps my mind curious and 
              my worldview expanding.
            </p>
            <div className="passion__books">
              <span>📚 Always Learning</span>
              <span>🧠 Curious Mind</span>
            </div>
          </div>

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