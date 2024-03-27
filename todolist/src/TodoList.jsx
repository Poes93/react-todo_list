import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

// Component for the list of to do items
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <AddTodo onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
