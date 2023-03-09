import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoBtn/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';


const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    todos,
    setTodos,   
}) => {
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
              completeTodo={() => completeTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </ TodoList>
  
        <CreateTodoButton />
          
      </React.Fragment>
    );
}

export { AppUI }