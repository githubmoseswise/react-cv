import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';
import initializeGA from './ga4'; // Importer la fonction d'initialisation Google Analytics
import './styles/styles.scss';

// Initialiser Google Analytics
initializeGA();

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapper pour utiliser useLocation dans App
const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
