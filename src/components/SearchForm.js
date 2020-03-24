import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
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

    handleSubmit = (e) => {
        const history = createBrowserHistory();
        e.preventDefault();
        const { id, title, composer, arranger, language, voices, numCopies, accompaniment, notes } = e.target
       
        const searchResults = this.context.records;
        let newResults = [];
        if(id.value) {
            for (let i=0; i<searchResults.length; i++) {
                if (parseInt(searchResults[i].id) === parseInt(id.value)) {
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
                if (searchResults[i].composer.toLowerCase().includes(composer.value.toLowerCase())) {
                    newResults.push(searchResults[i]);
                } 
          
            }
            console.log("Results after composer search:", newResults);
    
            let newResults2 = [];
            for(let i=0; i<newResults.length; i++) {
               if(newResults[i].title.toLowerCase().includes(title.value.toLowerCase())) {
                   newResults2.push(newResults[i]);
               }
            }
            console.log("Results after title search:", newResults2);
             
            let newResults3 = [];
            for(let i=0; i<newResults2.length; i++) {
               if(newResults2[i].arranger.toLowerCase().includes(arranger.value.toLowerCase())) {
                   newResults3.push(newResults2[i]);
               }
            }
            console.log("Results after arranger search:", newResults3);
    
             let newResults4 = [];
             for(let i=0; i<newResults3.length; i++) {
                if(newResults3[i].voicing.toLowerCase().includes(voices.value.toLowerCase())) {
                    newResults4.push(newResults3[i]);
                }
             }
             console.log("Results after voicing search:", newResults4);
            
              let newResults5 = [];
              for(let i=0; i<newResults4.length; i++) {
                 if(newResults4[i].lang.toLowerCase().includes(language.value.toLowerCase())) {
                     newResults5.push(newResults4[i]);
                 }
              }
              console.log("Results after language search:", newResults5);
    
               let newResults6 = [];
               for(let i=0; i<newResults5.length; i++) {
                  if(parseInt(newResults5[i].number_copies) >= parseInt(numCopies.value)) {
                      newResults6.push(newResults5[i]);
                  }
               }
               console.log("Results after numCopies search:", newResults6);
    
                let newResults7 = [];
                for(let i=0; i<newResults6.length; i++) {
                   if(newResults6[i].instrumentation.toLowerCase().includes(accompaniment.value.toLowerCase()) || accompaniment.value === '') {
                       newResults7.push(newResults6[i]);
                   }
                }
                console.log("Results after instrumentation search:", newResults7);
    
                let newResults8 = [];
             for(let i=0; i<newResults7.length; i++) {
                if(newResults7[i].notes.toLowerCase().includes(notes.value.toLowerCase())) {
                    newResults8.push(newResults7[i]);
                }
             }
             console.log("Results after notes search:", newResults8);
    
              this.props.history.push({
                pathname: '/search-results',
                state: { results: newResults8 }
            })
    
            newResults = [];
        }
        
            
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
                                <option value="TB">TB</option>
                                <option value="TTBB">TTBB</option>
                                <option value="Unison">Unison</option>
                                <option value="Solo">Solo</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="numCopies">Number of Copies</label>
                            <input type="number" 
                            className="input-number"
                            id="numCopies" placeholder={10} defaultValue={0} />
                        </div>
                        <div className="form-section">
                            <label htmlFor=
                            "accompaniment">Instrumentation</label>
                            <select name = "accompaniment" id="accompaniment">
                               
                                    <option value="">--Please choose an option--</option>
                                    <option value="piano"  >Piano</option>
                                    <option value="organ"  >Organ</option>
                                    <option value="unaccompanied">Unaccompanied</option>
                                    <option value="violin flute clarinet instrument">Obbligato instrument</option>
                               </select>  
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