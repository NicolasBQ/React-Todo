import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';




// React.Fragment -> Etiqueta invisible

function App() {
  return (
    <React.Fragment> 
      <TodoCounter />
        
      <TodoSearch />
        
      <TodoList />

      <CreateTodoButton />
        
    </React.Fragment>
  );
}

export default App;
