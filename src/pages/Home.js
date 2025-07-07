import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home super-home-bg">
            <Navigation />
            <div className="homeContent">
                <div className="content animated-fadein">
                    <h1 className="main-title">AGBOSSAGA Moïse</h1>
                    <h2 className="subtitle">Développeur full stack & Mobile</h2>
                    <div className="pdf">
                        <a className="cv-btn" href="https://drive.google.com/file/d/1Fw-S_aai0vtqPsj2kG9eW94dEpsYfQkh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-download"></i> Télécharger CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;