import React from 'react';
import "./ui.css"



function Modal({children: Component, show}) {

    if (!show) {
        return null;
    };

    return (
        <div className="modal-container">{Component}</div>
    );
}

export default Modal;
