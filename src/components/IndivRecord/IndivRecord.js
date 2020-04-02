import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ChoirWizardContext from '../../context/ChoirWizardContext';
import { createBrowserHistory } from 'history';

class IndivRecord extends React.Component {
    static contextType = ChoirWizardContext;
    constructor(props) {
        super(props);

        this.state = {
            record: this.props.record,
        }
    }
    
    handleSubmit = (e) => {
       this.props.history.push({
           pathname: "/edit-music",
           state: {record: this.state.record}
       })
    
    }
    render() {
        return (
            <BrowserRouter>
                <div className="search-result">
                    <h3 className="record-title">{this.props.record.title}</h3>
                    <ul>
                        <li>Composer: {this.props.record.composer}</li>
                        <li>Arranger: {this.props.record.arranger}</li>
                        <li>Language: {this.props.record.lang}</li>
                        <li>Voices: {this.props.record.voicing}</li>
                        <li>Number of Copies: {this.props.record.number_copies}</li>
                        <li>Instrumentation: {this.props.record.instrumentation}</li>
                        <li>Notes: {this.props.record.notes}</li>
                    </ul>
                   
                        <button className="general-button small-button" onClick={this.handleSubmit} >Edit item</button>
                 
                    <button 
                        className="general-button small-button" 
                        onClick={() => this.context.deleteItemRequest(this.props.record.id, this.context.deleteRecord)}
                    >
                        Delete item
                    </button>
                    <hr />
                </div>
            </BrowserRouter>
            
        );
    }
}


export default IndivRecord;