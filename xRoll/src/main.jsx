import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 import
import App from './App';  // Make sure this is the correct path to your App.jsx
import './index.css';
// Render the application to the 'root' element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
