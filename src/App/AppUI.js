import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoBtn/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { EmptyState } from '../EmptyState/EmptyState';


const AppUI = () => {
    const {
      error,
      loading,
      searchedTodos,
      todos,
      setTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);

    return (
      <React.Fragment> 
        <TodoCounter />
        <TodoSearch />
          
        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>La página está cargando</p>}
          {
            !loading && !searchedTodos.lenght &&
            <EmptyState />
          }

          {searchedTodos.map((todo, index) => (
            <TodoItem 
              key={index}
              text={todo.text}
              completed={todo.completed} 
              todos={todos}
              setTodos={setTodos}
              completeTodo={() => completeTodo(index)}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
        </ TodoList>

        {
          openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )
        }

        <CreateTodoButton 
          setOpenModal = {setOpenModal}
        />
        
      </React.Fragment>
    );
}

export { AppUI }