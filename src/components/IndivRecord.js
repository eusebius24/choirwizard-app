import React from 'react';

class IndivRecord extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search-result">
                        <h3>{this.props.record.title}</h3>
                        <ul>
                            <li>Composer: {this.props.record.composer}</li>
                            <li>Arranger: {this.props.record.arranger}</li>
                            <li>Language: {this.props.record.lang}</li>
                            <li>Voices: {this.props.record.voicing}</li>
                            <li>Number of Copies: {this.props.record.number_copies}</li>
                            <li>Instrumentation: {this.props.record.instrumentation}</li>
                            <li>Notes: {this.props.record.notes}</li>
                        </ul>
                        <hr />
                    </div>
        );
    }
}


export default IndivRecord;