import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoBtn/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';


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
          {!loading && !searchedTodos.lenght && <p>Crea tu primer todo!</p>}

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