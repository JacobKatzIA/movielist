import React from 'react'; // Importerar ramverket från React
import ReactDOM from 'react-dom/client'; // Kan placera ut det i DOM-trädet (dvs rendera vår applikation i elementet med id 'root')
import App from './App'; // Importerar komponenten App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


