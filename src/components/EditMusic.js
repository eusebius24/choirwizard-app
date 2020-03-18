import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../context/ChoirWizardContext';
import config from '../config'
import { Redirect } from 'react-router-dom';
import IndivItem from '../components/IndivItem'

class EditMusic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            records: [],
            toViewAll: false
        }
    }
   
   static contextType = ChoirWizardContext;
    handleOnClickCancel() {
        const history = createBrowserHistory();
        history.goBack()
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('You clicked submit!');
        console.log('context:', this.context);
        console.log('e.target:', e.target);
        console.log('this.props.record:', this.props.location.state)
        // const history = createBrowserHistory();
        const { record } = this.props.location.state
        const { title, composer, arranger, language, voices, numCopies, accompaniment, notes } = e.target
        const updatedRecord = {
            id: record.id,
            title: title.value,
            composer: composer.value, 
            arranger: arranger.value,
            lang: language.value,
            voicing: voices.value,
            number_copies: numCopies.value,
            instrumentation: accompaniment.value,
            notes: notes.value
        }
        console.log("updatedRecord:", updatedRecord);
        const recordId = updatedRecord.id;
        fetch(`http://localhost:8000/api/music/${recordId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedRecord),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            console.log("res:", res);
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
            
            this.context.updateRecord(updatedRecord);
            this.setState({
                toViewAll: true
            })
        })
        .catch(error => {
            this.setState({ error });
        })
        this.props.history.push('/view-all')
    }
    

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const { error } = this.state;
        console.log("record:", this.props.location.state);
        const { record } = this.props.location.state;
        console.log('toViewAll:', this.state.toViewAll);
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <h1>Edit Music</h1>
                </header>
                <section>
                    <form id="edit-music-form" onSubmit={this.handleSubmit}>
                        <div className='Add__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="form-section">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" defaultValue={record.title} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="composer">Composer</label>
                            <input type="text" id="composer" defaultValue={record.composer} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="title">Arranger</label>
                            <input type="text" id="arranger" defaultValue={record.arranger} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="language">Language</label>
                            <input type="text" id="language" defaultValue={record.lang} />
                        </div>
                        {/* <div class="form-section">
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
                            <select name="voices" id="voices" defaultValue={record.voicing}>
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
                            <input type="number" className="input-number" id="numCopies"  defaultValue = {record.number_copies} />
                         </div>
                         <div className="form-section">
                            <label htmlFor="accompaniment">Accompaniment</label>
                            <select name="accompaniment" id="accompaniment" defaultValue={record.instrumentation}>
                                <option value="">--Please choose an option--</option>
                                <option value="piano">Piano</option>
                                <option value="organ">Organ</option>
                                <option value="aCappella">A cappella</option>
                                <option value="pianoInst">Keyboard with obbligato instrument</option>
                               
                            </select>
                        </div> 
                            <div className="form-section">
                            <label htmlFor="notes">Notes</label>
                            <textarea id="notes" defaultValue={record.notes} />
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

export default EditMusic;