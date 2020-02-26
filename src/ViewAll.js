import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';

class ViewAll extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <h1>Browse Chamber Choir Catalogue</h1>
                </header>
                <section>
                    <div class="search-result">
                        <h3>Norwegian Alleluia</h3>
                        <ul>
                            <li>Composer: Kim Andre Arnesen</li>
                            <li>Arranger: </li>
                            <li>Language: Latin</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SATB</li>
                            <li>Number of Copies: 30</li>
                            <li>Accompaniment: A cappella</li>
                            <li>Notes: Could use percussion here</li>
                        </ul>
                        <hr />
                    </div>
                    <div class="search-result">
                        <h3>Life</h3>
                        <ul>
                            <li>Composer: Jeff Enns</li>
                            <li>Arranger: </li>
                            <li>Language: English</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SATB</li>
                            <li>Number of Copies: 40</li>
                            <li>Accompaniment: A cappella</li>
                            <li>Notes: </li>
                        </ul>
                        <hr />
                    </div>
                    <div class="search-result">
                        <h3>Lamentations of Jeremiah</h3>
                        <ul>
                            <li>Composer: Z. Randall Stroope</li>
                            <li>Arranger: </li>
                            <li>Language: English</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SATB</li>
                            <li>Number of Copies: 30</li>
                            <li>Accompaniment: Piano</li>
                            <li>Notes: Lots of divisi</li>
                        </ul>
                        <hr />
                    </div>
                    <button className="general-button">Next Page</button>
                    </section>
                <Footer />
            </div>
           
        );
    }
}

export default ViewAll;