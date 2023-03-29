import React from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(localStorage.getItem(itemName));
            }

            setItem(parsedItem);
            setLoading(false);
        } catch(error) {
            setError(error);
        }

        }, 1000);
    })


    const saveItem = (newTodo) => {
        try {
        localStorage.setItem(itemName, JSON.stringify(newTodo));
        setItem(newTodo);
        } catch(error) {
        setError(error);
        }

    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage };