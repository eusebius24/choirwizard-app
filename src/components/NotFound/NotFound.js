import React from 'react';
import { createBrowserHistory } from 'history';
import wizard from '../../wizard.png';

class NotFound extends React.Component {

    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack()
    }

    render() {
        return (
            <div className="container top">
                <img className="wizard-icon" src={wizard} alt="wizard icon" />
                <h1 className="header-logo">Item Not Found</h1>
                <button className="general-button" onClick={this.handleGoBack}>Go Back</button>
            </div>
        );
    }
}

export default NotFound;