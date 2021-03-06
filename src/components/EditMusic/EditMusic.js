import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { createBrowserHistory } from 'history';
import ChoirWizardContext from '../../context/ChoirWizardContext';
import wizard from '../../wizard.png';

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

    handleSubmit = (e) => {
        e.preventDefault();
        const { record } = this.props.location.state
        const title = document.getElementById("title").value;
        const composer = document.getElementById("composer").value;
        const arranger = document.getElementById("arranger").value;
        const language = document.getElementById("language").value;
        const voices = document.getElementById("voices").value;
        const numCopies = document.getElementById("numCopies").value;
        const accompaniment = document.getElementById("accompaniment").value;
        const notes = document.getElementById("notes").value;
        const updatedRecord = {
            id: record.id,
            title: title,
            composer: composer, 
            arranger: arranger,
            lang: language,
            voicing: voices,
            number_copies: parseInt(numCopies),
            instrumentation: accompaniment,
            notes: notes
        }
        const recordId = updatedRecord.id;
        this.context.updateItemRequest(updatedRecord, recordId);
        this.props.history.push("/view-all");
    }


    render() {
        const { error } = this.state;
        const { record } = this.props.location.state;
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Edit Music</h1>
                </header>
                <section>
                    <form id="edit-music-form" onSubmit={this.handleSubmit}>
                        <div className='Add__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="form-section">
                            <label htmlFor="title" className="block-label">Title</label>
                            <input type="text" id="title" required defaultValue={record.title} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="composer" className="block-label">Composer</label>
                            <input type="text" id="composer" defaultValue={record.composer} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="title" className="block-label">Arranger</label>
                            <input type="text" id="arranger" defaultValue={record.arranger} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="language" className="block-label">Language</label>
                            <input type="text" id="language" defaultValue={record.lang} />
                        </div>
                       
                        <div className="form-section">
                            <label htmlFor="voices" className="block-label">Voices</label>
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
                            <label htmlFor="numCopies" className="block-label">Number of Copies</label>
                            <input 
                                type="number" 
                                className="input-number" 
                                id="numCopies"  
                                defaultValue = {record.number_copies} 
                            />
                         </div>
                         <div className="form-section">
                            <label htmlFor="accompaniment" className="block-label">Accompaniment</label>
                            <select name="accompaniment" id="accompaniment" defaultValue={record.instrumentation}> 
                                <option value="">--Please choose an option--</option>
                                <option value="piano">Piano</option>
                                <option value="organ">Organ</option>
                                <option value="aCappella">A cappella</option>
                                <option value="pianoInst">Keyboard with obbligato instrument</option>
                               
                            </select>
                        </div> 
                            <div className="form-section">
                            <label htmlFor="notes" className="block-label">Notes</label>
                            <textarea id="notes" defaultValue={record.notes} />
                        </div>
                            <button className = "general-button" type="submit">Submit</button>
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

export default EditMusic;