import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

class Landing extends React.Component {
    constructor() {
        super();
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    state = { show: false }

    showModal = () => {
        this.setState({ show: true });
        console.log("show:", this.state.show);
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <main>
                <NavBar />
                <header className="main-header"> 
                    <h1>ChoirWizard</h1>
                    <h2>A modern solution for organizing choral sheet music</h2>
                </header>
                <section>
            <h2>Fully customizable, searchable catalogues</h2>
            <p>[placeholder for screenshot of search form]</p>
            <p>Use out-of-the-box templates or create your own catalogue design to suit your choir's unique needs</p>
        </section>

        <section>
            <h2>Catalogue your music in a way that makes sense to you</h2>
            <p>[Placeholder for add music form]</p>
            <p>Create your own fields so you can search for exactly what you need</p>
        </section>

        <section>
            <h2>Search by composer, title, voice types, ... anything you like!</h2>
            <p>[Placeholder for search results]</p>
            <p>Receive a custom list of music that meets your criteria!</p>
        </section>
        <section>
            <h2>Sign up now!</h2>
            <Link to="/home">
                <button className="signup-button general-button">Sign up</button>
            </Link>
            <LoginModal show={this.state.show} handleClose={this.hideModal}>
                <form id="login-form">
                    <h2>Please log in</h2>
                    <div className="form-section">
                        <label htmlFor="username">Username:</label>
                        <input type="text" placeholder="Please enter your username" id="username" />
                    </div>
                </form>
            </LoginModal>
            <button className="general-button" onClick={this.showModal}>Log in</button>
            
        </section>
            <Footer />
            </main>
            

        )
    }
}

export default Landing;