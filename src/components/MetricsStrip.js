import React from 'react';
import './MetricsStrip.css';
import { profile } from '../content/profile';

const MetricsStrip = () => {
  const metricsData = [
    { value: profile.metrics.routesCurated, label: 'Routes Curated', icon: 'fas fa-route' },
    { value: profile.metrics.breweriesVisited, label: 'Breweries Visited', icon: 'fas fa-beer' },
    { value: profile.metrics.booksPerYear, label: 'Books/Year', icon: 'fas fa-book' },
    { value: `${Math.floor(profile.metrics.photosCataloged / 1000)}k`, label: 'Photos', icon: 'fas fa-camera' },
    { value: profile.metrics.countriesExplored, label: 'Countries', icon: 'fas fa-globe' }
  ];

  return (
    <div className="metrics-strip">
      <div className="metrics-strip__grid">
        {metricsData.map((metric, idx) => (
          <div key={idx} className="metric-badge">
            <i className={metric.icon}></i>
            <div className="metric-badge__value">{metric.value}</div>
            <div className="metric-badge__label">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsStrip;
