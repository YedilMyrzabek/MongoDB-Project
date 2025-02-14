// /src/reportWebVitals.js

import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// Функция для логирования метрик производительности
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
