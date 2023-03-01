import React from "react";
import './TodoCounter.css'

const TodoCounter = (props) => {
    return (
        <h2 className="TodoCounter">
            Has completado {props.completedTodos} de {props.totalTodos} todos 
        </h2>
    )
}

export { TodoCounter };