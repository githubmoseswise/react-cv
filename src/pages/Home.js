import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="container">
            <Navigation />
            <main className="main-content">
                <div className="floating-elements">
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                </div>
                <div className="hero-content">
                    <p className="greeting">Bonjour, je suis</p>
                    <h1 className="main-title">AGBOSSAGA MOÏSE</h1>
                    <p className="subtitle">Développeur Full Stack & Mobile</p>
                    <div className="cta-buttons">
                        <a href="https://drive.google.com/file/d/1Fw-S_aai0vtqPsj2kG9eW94dEpsYfQkh/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7,10 12,15 17,10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Télécharger CV
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Me Contacter
                        </a>
                    </div>
                    <div className="tech-stack">
                        <p className="tech-title">Technologies que je maîtrise</p>
                        <div className="tech-items">
                            <span className="tech-item">React</span>
                            <span className="tech-item">Node.js</span>
                            <span className="tech-item">Flutter</span>
                            <span className="tech-item">Python</span>
                            <span className="tech-item">MongoDB</span>
                            <span className="tech-item">AWS</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;