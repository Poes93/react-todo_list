import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!todo.trim()) return; // Prevent adding empty todos
    setTodos([...todos, todo]);
    setTodo(''); // Clear input field
  };

  return (
    <div className="app">
      <h1>Simple To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
