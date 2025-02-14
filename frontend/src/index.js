// /src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Обновите импорт
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Используем createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Логирование производительности
reportWebVitals(console.log);
