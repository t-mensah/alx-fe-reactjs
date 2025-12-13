import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="new-todo-input"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
