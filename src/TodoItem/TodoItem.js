import React from "react";
import './TodoItem.css';

const TodoItem = (props) => {
    const completeTodo = (id) => {
        const newTodo = [...props.todos];
        if(newTodo[id].completed) {
          newTodo[id].completed = false;
        } else {
          newTodo[id].completed = true;
        }
        props.setTodos(newTodo);
      }

    const deleteTodo = (id) => {
        const newTodo = [...props.todos];
        newTodo.splice(id, 1);
        props.setTodos(newTodo);
    }

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={() => completeTodo(props.index)}
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
                onClick={() => deleteTodo(props.index)}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }