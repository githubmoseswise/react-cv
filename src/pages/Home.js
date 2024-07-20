import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>AGBOSSAGA Moïse</h1>
                    <h2>Développeur full stack & Mobile</h2>
                    <div className="pdf">
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;