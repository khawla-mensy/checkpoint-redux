import React from "react";
import TasksCard from "../TasksCard/TasksCard";
import "./List.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function List() {
    const todos = useSelector((state) => state.todoReducer.todos);
    const [filtredTodos, setFiltredTodos] = useState(todos);
    useEffect(() => {
        setFiltredTodos(todos);
    }, [todos]);
    const handleClick = () => {
        setFiltredTodos(todos.filter((task) => task.isDone === true));
    };
    const handleClick2 = () => {
        setFiltredTodos(todos.filter((task) => task.isDone === false));
    };
    const handleClick3 = () => {
        setFiltredTodos(todos);
    };

    return (
        <div className="List">
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <button onClick={handleClick}> show done</button>
                <button
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                    onClick={handleClick2}
                >
                    show not done
                </button>
                <button onClick={handleClick3}>Remove all filters</button>
            </div>

            {filtredTodos.map((el, i) => (
                <TasksCard tas={el} key={i} />
            ))}
        </div>
    );
}

export default List;
