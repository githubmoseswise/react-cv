import React from 'react';
import {BrowserRouter,useRoutes} from "react-router-dom";
import Home from './pages/Home';
import Knownledges from './pages/Knownledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
 
  const MyRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/competences", element: <Knownledges /> },
      { path: "/contact", element: <Contact /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/*", element: <NotFound /> },

    ]);
    return routes;
  };

  return (
      <BrowserRouter>
            <MyRoutes/>
      </BrowserRouter>       
  );
};

export default App;
