import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    const onClickBtn = () => {
        if(props.openModal) {
            props.setOpenModal(false);
        } else {
            props.setOpenModal(true);
        }
    }

    return (
        <button className="CreateTodoButton" 
                onClick={onClickBtn}
        >
            +
        </button>
    )
}

export { CreateTodoButton }