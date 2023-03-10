import React from "react";
import './TodoSearch.css';

const TodoSearch = ( { searchValue, setSearchValue } ) => {
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