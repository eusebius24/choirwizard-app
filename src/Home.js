import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <h1>Your ChoirWizard Home Page!</h1>
                    <h2>Welcome, Rachel</h2>
                    
                </header>
                <section>
                    <h2>Your Catalogues</h2>
                    
                    <div className= "cat-list">
                        <h3>Chamber Choir Catalogue</h3>
                        <p>[placeholder for screenshot of catalogue]</p>
                        <Link to="/view-all">
                            <button className = 'general-button small-button' >Browse This Catalogue</button>
                        </Link>
                        <h3>Catalogue Title</h3>
                        <Link to="/view-all">
                            <button className = 'general-button small-button' >Browse This Catalogue</button>
                        </Link>
                    </div>
                    

                    <Link to="/search-form">
                        <button className = 'general-button' >Search for Music</button>
                    </Link>
                    <Link to="/add-music">
                        <button className = 'general-button' >Add Music to Catalogue</button>
                    </Link>
                    <Link to="/create-catalogue">
                        <button className = 'general-button' >Create New Catalogue</button>
                    </Link>
                 </section>
                <Footer />
            </div>
           
        );
    }
}

export default Home;