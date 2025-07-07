import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Assurez-vous que ce chemin est correct
import Home from './pages/Home';
import Knownledges from './pages/Knownledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Assurez-vous que la fonction d'initialisation Google Analytics est appelée dans index.js

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Suivre la page vue lors des changements de route
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Knownledges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};


export default App;
