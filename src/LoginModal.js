import React from 'react';
import './App.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Log in</button>
            </section>
        </div>
    );
}

export default Modal;