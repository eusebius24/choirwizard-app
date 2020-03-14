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
        this.handleSubmitBasicAuth = this.handleSubmitBasicAuth.bind(this);
    }
    state = { show: false }

    showModal = () => {
        this.setState({ show: true });
        console.log("show:", this.state.show);
    }

    hideModal = () => {
        this.setState({ show: false });
    }

     handleSubmitBasicAuth(ev) {
        ev.preventDefault()
        const { username, password } = ev.target

        console.log('login form submitted');
        console.log({ username, password })

        this.hideModal()
    }

    render() {
        return (
            <main>
                <header className="main-header"> 
                    <h1>ChoirWizard</h1>
                    <h2>A modern solution for organizing choral sheet music</h2>
                </header>
                <section>
            <h2>Fully customizable, searchable catalogues</h2>
            <p>Use out-of-the-box templates or create your own catalogue design to suit your choir's unique needs</p>
        </section>

        <section>
            <h2>Catalogue your music in a way that makes sense to you</h2>
            <p>Create your own fields so you can search for exactly what you need</p>
        </section>

        <section>
            <h2>Search by composer, title, voice types, ... anything you like!</h2>
            <p>Receive a custom list of music that meets your criteria!</p>
        </section>
        <section>
            <h2>Sign up now!</h2>
            <Link to="/home">
                <button className="signup-button general-button">Sign up</button>
            </Link>
            <Link to="login-form">
                <button className="general-button">Log in</button>
            </Link>
        </section>
            <Footer />
            </main>
            

        )
    }
}

export default Landing;