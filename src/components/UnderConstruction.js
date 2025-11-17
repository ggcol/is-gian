import React, { useState, useEffect } from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner in this session
    const isDismissed = sessionStorage.getItem('constructionBannerDismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('constructionBannerDismissed', 'true');
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className={`construction-banner ${isMinimized ? 'construction-banner--minimized' : ''}`}>
      <div className="construction-banner__content">
        {!isMinimized && (
          <>
            <div className="construction-banner__icon">
              <i className="fas fa-tools"></i>
            </div>
            <div className="construction-banner__text">
              <strong>Work in Progress</strong>
              <span>This site is under construction. Some sections may not be complete yet.</span>
            </div>
          </>
        )}
        <div className="construction-banner__actions">
          <button 
            onClick={handleMinimize}
            className="construction-banner__btn construction-banner__btn--minimize"
            aria-label={isMinimized ? 'Expand' : 'Minimize'}
          >
            <i className={`fas fa-chevron-${isMinimized ? 'up' : 'down'}`}></i>
          </button>
          <button 
            onClick={handleDismiss}
            className="construction-banner__btn construction-banner__btn--close"
            aria-label="Dismiss"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
