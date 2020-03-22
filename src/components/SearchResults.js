import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import IndivRecord from './IndivRecord';
import './App.css';
import { Link } from 'react-router-dom';

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
            return (<p>Loading...</p>) 
        } else  {
            console.log('DATA:', results);
            const resultsList = results.map(record => {
                return (
                    
                    <IndivRecord record={record} key={record.id} /> 
              
                )
            })
        
       
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <h1>Search Results</h1>
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