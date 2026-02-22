import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import '../styles/TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Testing', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      
      <div className="todos-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one to get started!</p>
        ) : (
          <ul>
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  onClick={(e) => e.stopPropagation()}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
