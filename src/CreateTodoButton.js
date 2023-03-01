import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = () => {
    const onClickBtn = (msg) => {
        alert(msg);
    }

    return (
        <button className="CreateTodoButton" 
                onClick={() => onClickBtn('Aquí va el modal')}
        >
            +
        </button>
    )
}

export { CreateTodoButton }