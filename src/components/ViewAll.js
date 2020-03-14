import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import ChoirMusicApiService from '../services/choirmusic-api-service'
import config from '../config'
import IndivRecord from './IndivRecord'
import ChoirWizardContext from '../context/ChoirWizardContext'

class ViewAll extends React.Component {

    static contextType = ChoirWizardContext

    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
       
    }
            
    

    render() {
        const { records } = this.context;
        if(!records) {
            return (<p>Loading...</p>) 
        } else  {
            console.log('DATA:', this.context.records);
            const recordsList = this.context.records.map(record => {
                return (
                    
                    <IndivRecord record={record} key={record.id} /> 
              
                )
            })
        
       
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <h1>Browse Chamber Choir Catalogue</h1>
                </header>
                <section>
                    {(!records) ? "loading..." :
                    recordsList}
                    <button className="general-button">Next Page</button>
                </section>
                <Footer />
            </div>
           
        );
    }}
}

export default ViewAll;