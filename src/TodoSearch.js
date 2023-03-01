import React from "react";
import './TodoSearch.css';

const TodoSearch = () => {
    const onChangeSearchValue = (e) => {
        console.log(e.target.value);
    }
    
    return (
        <input 
            className="TodoSearch" placeholder='Tarea' 
            onChange={onChangeSearchValue}
        />
    )
}


export { TodoSearch };