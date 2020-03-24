import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../context/ChoirWizardContext';

class IndivItem extends React.Component {

    static contextType = ChoirWizardContext;
    
    constructor(props) {
        super(props);
    }
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
                    <h1>Item: {this.props.title}</h1>
                </header>
                <div className="search-result">
                        <h3>{this.props.title}</h3>
                        <ul>
                            <li>Composer: {this.props.composer}</li>
                            <li>Arranger: {this.props.arranger}</li>
                            <li>Language: {this.props.lang}</li>
                            <li>Voices: {this.props.voicing}</li>
                            <li>Number of Copies: {this.props.number_copies}</li>
                            <li>Accompaniment: {this.props.instrumentation}</li>
                            <li>Notes: {this.props.notes}</li>
                        </ul>
                        <Link to="/edit-music" params={{ record: this.props }}>
                            <button className="general-button small-button">Edit item</button>
                        </Link>
                        
                        <button className="general-button small-button" onClick={() => this.context.deleteItemRequest(this.props.record.id, this.context.deleteRecord)}>Delete item</button>
                       
                        <hr />
                    </div>
                <Footer />
            </div>
        );
    }
}

export default IndivItem;