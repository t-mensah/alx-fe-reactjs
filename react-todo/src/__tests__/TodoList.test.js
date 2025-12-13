import React from 'react';
import { render, screen, fireEvent } = require('@testing-library/react');
const { default: TodoList } = require('../components/TodoList');
require('@testing-library/jest-dom');

// Note: Using 'require' syntax here might be more compatible with certain test environments.

// 1. Initial Render Test
test('renders initial list of todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Test the App')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toHaveStyle('text-decoration: line-through');
});

// 2. Test Adding Todos
test('allows user to add a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add new todo/i);
  const addButton = screen.getByRole('button', { name: /Add Todo/i });
  const newTodoText = 'Walk the dog';

  fireEvent.change(inputElement, { target: { value: newTodoText } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
  expect(inputElement.value).toBe('');
});

// 3. Test Toggling Todos
test('allows user to toggle a todo completion status', () => {
  render(<TodoList />);
  const todoItemText = screen.getByText('Learn React'); 
  expect(todoItemText).not.toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItemText);
  expect(todoItemText).toHaveStyle('text-decoration: line-through');
});

// 4. Test Deleting Todos
test('allows user to delete a todo', () => {
  render(<TodoList />);
  const todoText = 'Learn React';
  const todoItem = screen.getByText(todoText);

  const deleteButton = screen.getByRole('button', { name: /Delete/i, container: todoItem.closest('li') });
  
  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
