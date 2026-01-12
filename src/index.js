import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { appInsights } from './config/appInsights';

// Initialize Application Insights
appInsights.trackPageView();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);