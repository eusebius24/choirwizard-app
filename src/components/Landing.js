import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import wizard from '../wizard.png';


class Landing extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <main className = "container">
                <header className="main-header"> 
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">ChoirWizard</h1>
                    <h2>A modern solution for organizing choral sheet music</h2>
                </header>
                <section>
            <h2 className="header-logo">Fully customizable, searchable catalogues</h2>
            <p>Use out-of-the-box templates or create your own catalogue design to suit your choir's unique needs</p>
        </section>

        <section>
            <h2 className="header-logo">Catalogue your music in a way that makes sense to you</h2>
            <p>Create your own fields so you can search for exactly what you need</p>
        </section>

        <section>
            <h2 className="header-logo">Search by composer, title, voice types, ... anything you like!</h2>
            <p>Receive a custom list of music that meets your criteria!</p>
        </section>
        <section>
            <h2 className="header-logo">Try it out!</h2>
            <Link to="/home">
                <button className="signup-button general-button">Go to home page</button>
            </Link>
        </section>
            <Footer />
            </main>
            

        )
    }
}

export default Landing;