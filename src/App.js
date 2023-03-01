import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
// import './App.css';

const todos = [
  { text: 'Curso React', completed: true },
  { text: 'Estructuras de Datos', completed: false },
  { text: 'Algoritmos', completed: false },
]

// React.Fragment -> Etiqueta invisible

function App() {
  return (
    <React.Fragment> 
      <TodoCounter />
        
      <TodoSearch />
        
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </ TodoList>

      <CreateTodoButton />
        
    </React.Fragment>
  );
}

export default App;
