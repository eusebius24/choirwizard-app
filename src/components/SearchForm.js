import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../context/ChoirWizardContext'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ChoirWizardContext;

    handleOnClickCancel() {
        const history = createBrowserHistory();
        history.goBack()
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('context:', this.context);
        const { id, title, composer, arranger, language, voices, numCopies, piano, organ, aCappella, instrument, notes } = e.target;
        // const searchResults = records.filter(record => parseFloat(id) === record.id);
        // console.log('searchResults:', searchResults);
        

    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                 <NavBar />
                <header className="main-header">
                    <h1>Search for Music</h1>
                </header>
                <section>
                    <p className="directions">Enter as few or as many details as you like.</p>
                    <form id="search-form" onSubmit={this.handleSubmit}>
                        <div className="form-section">
                            <label htmlFor="id">Music ID</label>
                            <input type="text" id="id" placeholder="Please enter music ID" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" placeholder="Title of piece" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="composer">Composer</label>
                            <input type="text" id="composer" placeholder="Composer" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="arranger">Arranger</label>
                            <input type="text" id="arranger" placeholder="Arranger" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="language">Language</label>
                            <input type="text" id="language" placeholder="English" />
                        </div>
                        {/* <div className="form-section">
                            <label htmlFor="period">Style or period</label>
                            <select name="period" id="period">
                                <option value="">--Please choose an option--</option>
                                <option value="Renaissance">Renaissance</option>
                                <option value="Baroque">Baroque</option>
                                <option value="Classical">Classical</option>
                                <option value="Romantic">Romantic</option>
                                <option value="20th Century">20th Century</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Contemporary">Contemporary</option>
                                <option value="Gospel">Gospel</option>
                                <option value="Hymn">Hymn</option>
                                <option value="Pop/Rock/Praise">Pop/Rock/Praise</option>
                            </select>
                        </div> */}
                        <div className="form-section">
                            <label htmlFor="voices">Voices</label>
                            <select name="voices" id="voices">
                                <option value="">--Please choose an option--</option>
                                <option value="SA">SA</option>
                                <option value="SSA">SSA</option>
                                <option value="SSAA">SSAA</option>
                                <option value="SATB">SATB</option>
                                <option value="SAB">SAB</option>
                                <option value="SB">SB</option>
                                <option value="Unison">Unison</option>
                                <option value="Solo">Solo</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="numCopies">Number of Copies</label>
                            <input type="number" 
                            className="input-number"
                            id="numCopies" placeholder={10} />
                        </div>
                        <div className="form-section checkboxes">
                            <h3>Accompaniment</h3>
                            <div className = "checkbox-list">
                                <div>
                                    <input type="checkbox" id="piano" name="piano" defaultChecked />
                                    <label htmlFor="piano">Piano</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="organ" name="organ" />
                                    <label htmlFor="piano">Organ</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aCappella" name="aCappella" />
                                    <label htmlFor="aCappella">A cappella</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="instrument" name="instrument" />
                                    <label htmlFor="instrument">Obbligato instrumental part</label>
                                </div>
                            </div>
                           
                        </div>
                        <div className="form-section">
                            <label htmlFor="notes">Notes</label>
                            <textarea  id="notes" placeholder="Search notes here" />
                        </div>
                        {/* <Link to="/search-results"> */}
                            <button className = "general-button" type="submit">Search</button>
                        {/* </Link> */}
                        <button className="general-button" type="reset" onClick={this.handleOnClickCancel}>Cancel</button>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }
}

export default SearchForm;