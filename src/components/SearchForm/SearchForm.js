import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../App/App.css';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../../context/ChoirWizardContext'
import wizard from '../../wizard.png';


class SearchForm extends React.Component {
   
    static contextType = ChoirWizardContext;

    handleOnClickCancel() {
        const history = createBrowserHistory();
        history.goBack()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const title = document.getElementById("title").value;
        const composer = document.getElementById("composer").value;
        const arranger = document.getElementById("arranger").value;
        const language = document.getElementById("language").value;
        const voices = document.getElementById("voices").value;
        const numCopies = document.getElementById("numCopies").value;
        const accompaniment = document.getElementById("accompaniment").value;
        const notes = document.getElementById("notes").value;
       
        const searchResults = this.context.records;
       
        let newResults = [];
        if(id) {
            for (let i=0; i<searchResults.length; i++) {
                if (parseInt(searchResults[i].id) === parseInt(id)) {
                    newResults.push(searchResults[i]);
                }
            }
            if(newResults.length > 0) {
                this.props.history.push({
                    pathname: '/search-results',
                    state: { results: newResults }
                })
                return newResults;
            } else if (newResults.length === 0) {
                newResults = "Id not found";
                this.props.history.push({
                    pathname: '/search-results',
                    state: { results: newResults }
                })
                return newResults;
            } 
        } else {
            for(let i=0; i<searchResults.length; i++) {
                if (searchResults[i].composer.toLowerCase().includes(composer.toLowerCase())) {
                    newResults.push(searchResults[i]);
                } 
            }
            let newResults2 = [];
            for(let i=0; i<newResults.length; i++) {
               if(newResults[i].title.toLowerCase().includes(title.toLowerCase())) {
                   newResults2.push(newResults[i]);
               }
            }
            let newResults3 = [];
            for(let i=0; i<newResults2.length; i++) {
               if(newResults2[i].arranger.toLowerCase().includes(arranger.toLowerCase())) {
                   newResults3.push(newResults2[i]);
               }
            }
            let newResults4 = [];
            for(let i=0; i<newResults3.length; i++) {
                if(newResults3[i].voicing.toLowerCase().includes(voices.toLowerCase()) || voices.toLowerCase() === null) {
                    newResults4.push(newResults3[i]);
                }
            }
            let newResults5 = [];
            for(let i=0; i<newResults4.length; i++) {
                 if(newResults4[i].lang.toLowerCase().includes(language.toLowerCase()) || language.toLowerCase() === null) {
                     newResults5.push(newResults4[i]);
                 }
            }
            let newResults6 = [];
            for(let i=0; i<newResults5.length; i++) {
                if(parseInt(newResults5[i].number_copies) >= parseInt(numCopies) || parseInt(numCopies) === 0) {
                    newResults6.push(newResults5[i]);
                }
            }
            let newResults7 = [];
            for(let i=0; i<newResults6.length; i++) {
                if(newResults6[i].instrumentation.toLowerCase().includes(accompaniment.toLowerCase()) || accompaniment.value === '') {
                    newResults7.push(newResults6[i]);
                }
            }
            let newResults8 = [];
            for(let i=0; i<newResults7.length; i++) {
                if(newResults7[i].notes.toLowerCase().includes(notes.toLowerCase()) || notes === '') {
                    newResults8.push(newResults7[i]);
                }
            }
              this.props.history.push({
                pathname: '/search-results',
                state: { results: newResults8 }
            })
    
            newResults = [];
         } 
        }
       
    render() {
        return (
            <div className="container">
                 <NavBar />
                <header className="main-header">
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Search for Music</h1>
                </header>
                <section>
                    <p className="directions">Enter as few or as many details as you like.</p>
                    <form id="search-form" onSubmit={this.handleSubmit}>
                        <div className="form-section">
                            <label htmlFor="id" className="block-label">Music ID</label>
                            <input type="text" id="id" placeholder="Please enter music ID" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="title" className="block-label">Title</label>
                            <input type="text" id="title" placeholder="Title of piece" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="composer" className="block-label">Composer</label>
                            <input type="text" id="composer" placeholder="Composer" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="arranger" className="block-label">Arranger</label>
                            <input type="text" id="arranger" placeholder="Arranger" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="language" className="block-label">Language</label>
                            <input type="text" id="language" placeholder="English" />
                        </div>
                      
                        <div className="form-section">
                            <label htmlFor="voices" className="block-label">Voices</label>
                            <select name="voices" id="voices">
                                <option value="">--Please choose an option--</option>
                                <option value="SA">SA</option>
                                <option value="SSA">SSA</option>
                                <option value="SSAA">SSAA</option>
                                <option value="SATB">SATB</option>
                                <option value="SAB">SAB</option>
                                <option value="SB">SB</option>
                                <option value="TB">TB</option>
                                <option value="TTBB">TTBB</option>
                                <option value="Unison">Unison</option>
                                <option value="Solo">Solo</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="numCopies" className="block-label">Number of Copies</label>
                            <input 
                                type="number" 
                                className="input-number"
                                id="numCopies" 
                                placeholder={10} 
                                defaultValue={0} 
                            />
                        </div>
                        <div className="form-section">
                            <label 
                                htmlFor="accompaniment" 
                                className="block-label"
                            >
                                Instrumentation
                            </label>
                            <select name = "accompaniment" id="accompaniment">
                                <option value="">--Please choose an option--</option>
                                <option value="piano"  >Piano</option>
                                <option value="organ"  >Organ</option>
                                <option value="unaccompanied">Unaccompanied</option>
                                <option value="violin flute clarinet instrument">Obbligato instrument</option>
                            </select>  
                        </div>
                        <div className="form-section">
                            <label htmlFor="notes" className="block-label">Notes</label>
                            <textarea id="notes" placeholder="Search notes here" />
                        </div>
                        <button className = "general-button" type="submit">Search</button>
                        <button 
                            className="general-button" 
                            type="reset" 
                            onClick={this.handleOnClickCancel}
                        >
                            Cancel
                        </button>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }
}


export default SearchForm;