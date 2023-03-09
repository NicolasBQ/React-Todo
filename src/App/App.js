import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { id: 0, text: 'Curso React', completed: true },
//   { id: 1, text: 'Estructuras de Datos', completed: false },
//   { id: 2, text: 'Algoritmos', completed: true },
// ]

// React.Fragment -> Etiqueta invisible

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemName));
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodo) => {
    localStorage.setItem(itemName, JSON.stringify(newTodo));
    setItem(newTodo);
  }

  return [item, saveItem];
}

function App() {
  const [todos, saveItem] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length > 0) {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
  } else {
    searchedTodos = todos;
  }

  const completeTodo = (id) => {
    console.log(id);
    const newTodo = [...todos];
    if(newTodo[id].completed) {
      newTodo[id].completed = false;
    } else {
      newTodo[id].completed = true;
    }
    saveItem(newTodo);
  }

  const deleteTodo = (id) => {
      console.log(id);
      const newTodo = [...todos];
      newTodo.splice(id, 1);
      saveItem(newTodo);
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
