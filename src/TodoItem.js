import React from "react";
import './TodoItem.css';

const TodoItem = (props) => {
    const onCompleteItem = () => {
        alert('Completaste la tarea ' + props.text);
    }

    const onDeleteItem = () => {
        alert('Eliminaste la tarea ' + props.text);
    }

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleteItem}
            >
                √
            </span>    
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {
                    props.text
                }
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeleteItem}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }