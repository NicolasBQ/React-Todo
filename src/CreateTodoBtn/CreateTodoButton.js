import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    const onClickBtn = () => {
        props.setOpenModal(prevState => !prevState);
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