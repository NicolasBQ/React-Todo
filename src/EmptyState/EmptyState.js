import React from "react";
import './EmptyState.css';
import image from './emptyState.svg';

const EmptyState = () => {
    return (
        <div className="emptyContainer">
            <img src={image} className="image"></img>
            <p className="emptyText">Estás al día! No hay tareas pendientes</p>
        </div>
    )
}

export { EmptyState }