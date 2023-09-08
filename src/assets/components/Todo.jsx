import React, { useState, useEffect } from 'react'
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ task, toggleComplete, deleteTask, toggleEditing, editTask }) => {
    const [value, setValue] = useState(task.task)

    const handleEditChange = (e) => {
        setValue(e.target.value);
    };

    const handleEditBlur = () => {
        toggleEditing(task.id); // Toggle isEditing when the input field loses focus (optional).
        editTask(task.id, value); // Call the editTask function in the parent component with the updated task and task id.

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // When Enter key is pressed, update the task
            handleEditBlur();

        }
    };


    return (
        <>
            <div className="Todo">
                {task.isEditing ? (
                    // Render the input field in editing mode
                    <input
                        className="TodoForm"
                        type="text"
                        value={value}
                        onChange={handleEditChange}
                        onBlur={handleEditBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus

                    />
                ) : (
                    // Render the task as text when not in editing mode
                    <p
                        onClick={() => toggleComplete(task.id)}
                        className={`${task.completed ? 'completed' : ''}`}
                    >
                        {task.task}
                    </p>
                )}

                <div>
                    <RiEdit2Line onClick={() => toggleEditing(task.id)} /> {/* Edit icon */}
                    <RiDeleteBinLine onClick={() => deleteTask(task.id)} /> {/* Trash can icon */}
                </div>
            </div>
        </>
    )
}