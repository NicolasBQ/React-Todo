import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Curso React', completed: true },
  { text: 'Estructuras de Datos', completed: false },
  { text: 'Algoritmos', completed: true },
]

// React.Fragment -> Etiqueta invisible

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length > 0) {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
  } else {
    searchedTodos = todos;
  }


  return (
    <AppUI 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedTodos={searchedTodos}      
          todos={todos}
          setTodos={setTodos}
    />
  );
}

export default App;
