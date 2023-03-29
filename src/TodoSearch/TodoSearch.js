import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext/TodoContext";

const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    }
    
    return [
        <input 
            className="TodoSearch" placeholder='Tarea' 
            value={searchValue}
            onChange={onChangeSearchValue}
        />,
        <p>{searchValue}</p>
    ]
}


export { TodoSearch };