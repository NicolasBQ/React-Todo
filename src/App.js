import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
// import './App.css';

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
    <React.Fragment> 
      <TodoCounter 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
        
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed} 
            todos={todos}
            setTodos={setTodos}
            index={index}
          />
        ))}
      </ TodoList>

      <CreateTodoButton />
        
    </React.Fragment>
  );
}

export default App;
