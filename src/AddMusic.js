import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

class AddMusic extends React.Component {
   
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
                    <h1>Add Music</h1>
                </header>
                <section>
                    <form id="add-music-form">
                        <div class="form-section">
                            <label for="title">Title</label>
                            <input type="text" id="title" placeholder="Title of piece" />
                        </div>
                        <div class="form-section">
                            <label for="title">Composer</label>
                            <input type="text" id="composer" placeholder="Composer" />
                        </div>
                        <div class="form-section">
                            <label for="title">Arranger</label>
                            <input type="text" id="arranger" placeholder="Arranger" />
                        </div>
                        <div class="form-section">
                            <label for="language">Language</label>
                            <input type="text" id="language" placeholder="English" />
                        </div>
                        <div class="form-section">
                            <label for="period">Style or period</label>
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
                        </div>
                        <div class="form-section">
                            <label for="voices">Voices</label>
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
                         <div class="form-section">
                         <label for="num-copies">Number of Copies</label>
                            <input type="number" className="input-number" id="num-copies" placeholder={10} />
                         </div>
                         <div class="form-section checkboxes">
                             <h3>Accompaniment</h3>
                             <div className = "checkbox-list">
                                <div>
                                    <input type="checkbox" id="piano" name="piano" checked />
                                    <label for="piano">Piano</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="organ" name="organ" />
                                    <label for="piano">Organ</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="a-cappella" name="a-cappella" />
                                    <label for="a-cappella">A cappella</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="instrument" name="instrument" />
                                    <label for="instrument">Obbligato instrumental part</label>
                                </div>
                                </div>
                            </div>
                            <div class="form-section">
                            <label for="notes">Notes</label>
                            <textarea id="notes" placeholder="Please enter any notes here" />
                        </div>
                            <Link to="/indiv-item">
                                <button className = "general-button" type="submit">Submit</button>
                            </Link>
                            <button className="general-button" type="reset" onClick={this.handleOnClickCancel}>Cancel</button>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }
}

export default AddMusic;