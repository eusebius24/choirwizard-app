import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <h1>Search Results</h1>
                </header>
                <section>
                    <div className="search-result">
                        <h3>Storm Comin'</h3>
                        <ul>
                            <li>Composer: The Wailin Jennys</li>
                            <li>Arranger: </li>
                            <li>Language: English</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SSA</li>
                            <li>Number of Copies: 30</li>
                            <li>Accompaniment: A cappella</li>
                            <li>Notes: Body percussion</li>
                        </ul>
                        <Link to="/indiv-item">
                            <button class="general-button small-button">View item</button>
                        </Link>
                        <Link to="/add-music">
                            <button class="general-button small-button">Edit item</button>
                        </Link>
                        <hr />
                    </div>
                    <div class="search-result">
                        <h3>Light of a Clear Blue Morning</h3>

                        <ul>
                            <li>Composer: Dolly Parton</li>
                            <li>Arranger: </li>
                            <li>Language: English</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SSA</li>
                            <li>Number of Copies: 20</li>
                            <li>Accompaniment: A cappella | Obbligato soprano recorder</li>
                            <li>Notes: Small group and soloist</li>
                        </ul>
                        <Link to="/indiv-item">
                            <button class="general-button small-button">View item</button>
                        </Link>
                        <Link to="/add-music">
                            <button class="general-button small-button">Edit item</button>
                        </Link>
                        <hr />

                    </div>
                    <div class="search-result">
                        <h3>O Sister/Keep Me Steady Through The Storm</h3>

                        <ul>
                            <li>Composer: Kathleen Allan</li>
                            <li>Arranger: </li>
                            <li>Language: English</li>
                            <li>Period: Contemporary</li>
                            <li>Voices: SSA</li>
                            <li>Number of Copies: 40</li>
                            <li>Accompaniment: Piano</li>
                            <li>Notes: </li>
                        </ul>
                        <Link to="/indiv-item">
                            <button class="general-button small-button">View item</button>
                        </Link>
                        <Link to="/add-music">
                            <button class="general-button small-button">Edit item</button>
                        </Link>
                        <hr />
                        
                    </div>
                    <Link to="/search-form">
                        <button className = 'general-button' >Search Again</button>
                    </Link>
                    <Link to="/home">
                    <button className = 'general-button'>Home Page</button>
                    </Link>
                </section>
                <Footer />
            </div>
        );
    }
}

export default SearchResults;