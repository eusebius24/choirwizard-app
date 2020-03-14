import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';

class IndivItem extends React.Component {
    handleOnClickCancel() {
        const history = createBrowserHistory();
        history.goBack()
    }


    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <h1>Item: Norwegian Alleluia</h1>
                </header>
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
                        <Link to="/add-music">
                            <button class="general-button small-button">Edit item</button>
                        </Link>
                        <button className="general-button small-button" type="reset" onClick={this.handleOnClickCancel}>Go Back</button>
                       
                        <hr />
                    </div>
                <Footer />
            </div>
        );
    }
}

export default IndivItem;