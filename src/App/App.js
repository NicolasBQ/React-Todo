import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { id: 0, text: 'Curso React', completed: true },
//   { id: 1, text: 'Estructuras de Datos', completed: false },
//   { id: 2, text: 'Algoritmos', completed: true },
// ]

// React.Fragment -> Etiqueta invisible

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length > 0) {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
  } else {
    searchedTodos = todos;
  }

  const saveTodos = (newTodo) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodo));
    setTodos(newTodo);
  }

  const completeTodo = (id) => {
    console.log(id);
    const newTodo = [...todos];
    if(newTodo[id].completed) {
      newTodo[id].completed = false;
    } else {
      newTodo[id].completed = true;
    }
    saveTodos(newTodo);
  }

  const deleteTodo = (id) => {
      console.log(id);
      const newTodo = [...todos];
      newTodo.splice(id, 1);
      saveTodos(newTodo);
  }

  return (
    <AppUI 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedTodos={searchedTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}      
          todos={todos}
    />
  );
}

export default App;
