import React from "react";
import './ErrorState.css';
import image from './error.svg';

const ErrorState = () => {
    return (
        <div className="emptyContainer">
            <img src={image} className="image"></img>
            <p className="emptyText">Ocurrió un error, vuelve a cargar la página</p>
        </div>
    )
}

export { ErrorState }