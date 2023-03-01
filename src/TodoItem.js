import React from "react";

const TodoItem = (props) => {
    return(
        <li>
            <span>
                <p>
                    {
                        props.text
                    }
                </p>
            </span>
        </li>
    )
}

export { TodoItem }