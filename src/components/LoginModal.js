import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="submit">Log in</button>
                <button type="reset" onClick={handleClose}>Cancel</button>
            </section>
        </div>
    );
}

export default Modal;