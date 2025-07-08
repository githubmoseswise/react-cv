import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knownledges/Languages';
import Experience from '../components/knownledges/Experience';
import OtherSikills from '../components/knownledges/OtherSikills';
import Hobbies from '../components/knownledges/Hobbies';

const Knownledges = () => {
    return (
        <div className="container">
            <Navigation/>
            <main className="main-content">
                <div className="competences-content">
                    <Languages/>
                    <Experience/>
                    <OtherSikills/>
                    <Hobbies/>
                </div>
            </main>
        </div>
    );
};


export default Knownledges;