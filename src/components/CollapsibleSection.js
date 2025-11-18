import React, { useState, cloneElement } from 'react';
import './CollapsibleSection.css';

const CollapsibleSection = ({ children, title, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`collapsible-section ${isExpanded ? 'collapsible-section--expanded' : 'collapsible-section--collapsed'}`}>
      <button 
        className="collapsible-section__toggle"
        onClick={toggleExpanded}
        aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
      >
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </button>
      {!isExpanded && title && (
        <div className="collapsible-section__collapsed-header" onClick={toggleExpanded}>
          <h2 className="section-title">{title}</h2>
        </div>
      )}
      <div className="collapsible-section__content">
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
