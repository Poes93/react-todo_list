import React from 'react';

// Component for each to do item with a line-through style if completed
function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;