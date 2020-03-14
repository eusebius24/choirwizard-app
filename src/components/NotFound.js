import React from 'react';
import { createBrowserHistory } from 'history';

class NotFound extends React.Component {

    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack()
    }

    render() {
        return (
            <div className="container top">
                <h1>Item Not Found</h1>
                <button className="general-button" onClick={this.handleGoBack}>Go Back</button>
            </div>
        );
    }
}

export default NotFound;