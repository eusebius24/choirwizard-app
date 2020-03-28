import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import wizard from '../wizard.png';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Your ChoirWizard Home Page!</h1>
                </header>
                <section>
                    <h2 className="header-logo">Your Catalogues</h2>
                    
                    <div className= "cat-list">
                        <h3>Chamber Choir Catalogue</h3>
                        <Link to="/view-all">
                            <button className = 'general-button' >Browse The Catalogue</button>
                        </Link>
                        <Link to="/search-form">
                            <button className = 'general-button' >Search for Music</button>
                        </Link>
                        <Link to="/add-music">
                            <button className = 'general-button' >Add Music to Catalogue</button>
                        </Link>
                    </div>
                 </section>
                <Footer />
            </div>
           
        );
    }
}

export default Home;