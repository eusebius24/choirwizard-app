import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../context/ChoirWizardContext';
import wizard from '../wizard.png';

class AddMusic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            records: []
        }
    }
   
   static contextType = ChoirWizardContext;
    handleOnClickCancel() {
        const history = createBrowserHistory();
        history.goBack()
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, composer, arranger, language, voices, numCopies, accompaniment, notes } = e.target
        const newRecord = {
            title: title.value,
            composer: composer.value, 
            arranger: arranger.value,
            lang: language.value,
            voicing: voices.value,
            number_copies: numCopies.value,
            instrumentation: accompaniment.value,
            notes: notes.value,
        }
       
        
        fetch(`https://cryptic-sea-55654.herokuapp.com/api/music`, {
            method: 'POST',
            body: JSON.stringify(newRecord),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if (!res.ok) {
                
                return res.json().then(error => {
                    throw error
                })

            }
            return res.json();
        })
        .then(data => {
            title.value = '';
            composer.value = '';
            arranger.value = '';
            language.value = '';
            voices.value = '';
            numCopies.value = null;
            accompaniment.value = '';
            notes.value = '';
            this.context.addRecord(data);
            this.props.history.push('/view-all')
        })
        .catch(error => {
            this.setState({ error });
        })
    }
    

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const { error } = this.state;
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Add Music</h1>
                </header>
                <section>
                    <form id="add-music-form" onSubmit={this.handleSubmit}>
                        <div className='Add__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="form-section">
                            <label htmlFor="title" className="block-label">Title</label>
                            <input type="text" id="title" placeholder="Title of piece" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="composer" className="block-label">Composer</label>
                            <input type="text" id="composer" placeholder="Composer" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="title" className="block-label">Arranger</label>
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
                                <option value="Unison">Unison</option>
                                <option value="Solo">Solo</option>
                            </select>
                         </div>
                         <div className="form-section">
                         <label htmlFor="numCopies" className="block-label">Number of Copies</label>
                            <input type="number" className="input-number" id="numCopies" placeholder={10} defaultValue = {null} />
                         </div>
                         <div className="form-section">
                            <label htmlFor="accompaniment" className="block-label">Accompaniment</label>
                            <select name="accompaniment" id="accompaniment">
                                <option value="">--Please choose an option--</option>
                                <option value="piano">Piano</option>
                                <option value="organ">Organ</option>
                                <option value="aCappella">A cappella</option>
                                <option value="pianoInst">Keyboard with obbligato instrument</option>
                               
                            </select>
                        </div> 
                            <div className="form-section">
                            <label htmlFor="notes" className="block-label">Notes</label>
                            <textarea id="notes" placeholder="Please enter any notes here" />
                        </div>
                            {/* <Link to="/indiv-item"> */}
                                <button className = "general-button" type="submit">Submit</button>
                            {/* </Link> */}
                            <button className="general-button" type="reset" onClick={this.handleOnClickCancel}>Cancel</button>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }

}

export default AddMusic;