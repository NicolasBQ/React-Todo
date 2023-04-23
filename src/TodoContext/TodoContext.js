import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


const TodoProvider = (props) => {
    const {
        item: todos,
        saveItem,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(searchValue.length > 0) {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    } else {
        searchedTodos = todos;
    }

    const addTodo = (text) => {
        const newTodo = [...todos];
        newTodo.push({
            completed: false,
            text: text
        });
        console.log(newTodo);
        saveItem(newTodo);
    }

    const completeTodo = (id) => {
        const newTodo = [...todos];
        if(newTodo[id].completed) {
            newTodo[id].completed = false;
        } else {
            newTodo[id].completed = true;
        }
        console.log(newTodo);
        saveItem(newTodo);
    }

    const deleteTodo = (id) => {
        const newTodo = [...todos];
        newTodo.splice(id, 1);
        saveItem(newTodo);
    }
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,      
            todos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };