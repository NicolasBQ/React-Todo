import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
    { text: 'Curso React', completed: false },
    { text: 'Estructuras de Datos', completed: false },
    { text: 'Algoritmos', completed: false },
  ]


const TodoList = () => {
    return (
        todos.map(todo => {
            <TodoItem />
          })
    )
}

export { TodoList }