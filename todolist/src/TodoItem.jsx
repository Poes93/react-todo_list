import React from 'react';

//Display each to do and if marked, a line-through will be added to the text
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