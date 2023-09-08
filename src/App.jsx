import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './assets/components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './assets/components/Todo';




function App() {


  const [todos, setTodos] = useState([]) // our to do list is an array comprising of "task" objects 
  // which will have id , title , checked properties

  const addTodo = (todo) => { // We call this function ONSUBMIT of the form in "TodoForm"
    setTodos(currentTodos => {
      return (
        [
          ...currentTodos,
          {
            id: uuidv4(),
            task: todo,  // whatever is passed into the function
            completed: false,
            isEditing: false
          }
        ]


      )

    })

  }
  const toggleComplete = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  };

  const deleteTask = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    )
  }

  const toggleEditing = (id) => {

    setTodos((currentTodos) =>
      currentTodos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    )
    console.log(todos)

  }

  const editTask = (id, updatedTask) => {
    setTodos(currentTodos => currentTodos.map((todo) => todo.id === id ? { ...todo, task: updatedTask } : todo))
  }

  return (
    <>

      <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
        {todos.map(todo => {
          return (
            <Todo task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              toggleEditing={toggleEditing}
              editTask={editTask} />
          )
        })}

      </div>

    </>
  );
}

export default App;