import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
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
                </section>
                <Footer />
            </div>
           
        );
    }}
}

export default ViewAll;