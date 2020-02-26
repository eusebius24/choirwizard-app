import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import { Link } from 'react-router-dom';

class CreateCatalogue extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <NavBar />
                <header className="main-header">
                    <h1>Create Music Catalogue</h1>
                </header>
                <section>
                    <p className="directions">Please indicate which information you would like to include in your catalogue. If
                    there
                    is a category missing
                    that you would like to add, please add it in the "Other Fields" section.</p>
                    
                    <form id="create-cat-form">
                        <div className="form-section">
                            <label for="name">Catalogue Name</label>
                            <input type="text" placeholder="Please enter your catalogue name" />
                        </div>
                        <div className="form-section">
                            <label for="name">Choir Name</label>
                            <input type="text" placeholder="Which choir(s) will perform this music?" />
                        </div>
                        <div className="form-section checkboxes">
                            <h3>Desired Fields</h3>
                            <div className = "checkbox-list">
                                <div>
                                    <input type="checkbox" id="title" name="title" checked />
                                    <label for="title">Title</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="composer" name="composer" checked />
                                    <label for="composer">Composer</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="arranger" name="arranger" checked />
                                    <label for="arranger">Arranger</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="period" name="period" />
                                    <label for="period">Style Period (Renaissance, Baroque, Contemporary ...) </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="voices" name="voices" />
                                    <label for="voices">Voices (SSA, SATB ...) </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="accompaniment" name="accompaniment" />
                                    <label for="accompaniment">Accompaniment(piano, organ, obbligato instrument, a cappella...)
                                    </label>
                                </div>
                             </div>
                        </div>
                        <div className="form-section">
                    <label for="name">Other field</label>
                    <input type="text" placeholder="Please enter field name" />
                </div>
                <div className="form-section">
                    <label for="name">Other field</label>
                    <input type="text" placeholder="Please enter field name" />
                </div>
                <div className="form-section">
                    <label for="name">Other field</label>
                    <input type="text" placeholder="Please enter field name" />
                </div>
                <Link to="/home">
                    <button className = "general-button" type="submit">Submit</button>
                </Link>
                
                <button className = "general-button" type="reset">Reset</button>
                </form>
                </section>
                <Footer />
            </div>
        );
    }
}

export default CreateCatalogue;