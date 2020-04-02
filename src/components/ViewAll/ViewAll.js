import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import '../App/App.css';
import IndivRecord from '../IndivRecord/IndivRecord'
import ChoirWizardContext, { useAppContext } from '../../context/ChoirWizardContext'
import wizard from '../../wizard.png';

class ViewAll extends React.Component {

    static contextType = ChoirWizardContext;

    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
    }
            
    render() {
        const { records } = this.context || useAppContext();
        if(!records) {
            return (<p>Loading...</p>) 
        } else  {
            const recordsList = this.context.records && this.context.records.map(record => {
                return (
                    <IndivRecord record={record} key={record.id} history={this.props.history} /> 
                );
            })
        
       
        return (
            <div className="container">
                <NavBar />
                <header className="main-header"> 
                    <img className="wizard-icon" src={wizard} alt="wizard icon" />
                    <h1 className="header-logo">Browse Chamber Choir Catalogue</h1>
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