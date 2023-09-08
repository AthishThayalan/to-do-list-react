import React, { useState } from "react"

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("") // state to keep track of what is in the
    // the data held in this value we need to send to the App.jsx so it can create a task object with an id and checked value 
    // for this we use props 
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        value.trim() !== "" && addTodo(value); // Call trim() with parentheses
        setValue("");
    };

    return (
        <>
        <h1>To do list</h1>
        <form action="" className="TodoForm" onSubmit={handleSubmit}>
            
            <input value={value} onChange={handleChange} type="text" className="todo-input" placeholder="What is the task today" />
            <button className="todo-btn">Add task</button>
        </form>
        </>
    )

}