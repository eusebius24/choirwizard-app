import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import IndivRecord from './IndivRecord';
import './App.css';
import { Link } from 'react-router-dom';
import wizard from '../wizard.png';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        const { results } = this.props.location.state;
        if(!results) {
            return (<p className="message">Loading...</p>) 
        } else if (results == "Id not found") {
            return (<p className="message">Id not found</p> )   
        } else {
            const resultsList = results.map(record => {
                return (
                    
                    <IndivRecord record={record} key={record.id} /> 
              
                )
            })
        
       
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Search Results</h1>
                </header>
                <section>
                    {(!results) ? "loading..." :
                    resultsList}
                    <Link to="/view-all">
                            <button className = 'general-button'>View Entire Catalogue</button>
                        </Link>
                </section>
                <Footer />
            </div>
           
        );
    }}
}

export default SearchResults;