import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if title is rendered
    const title = screen.getByText('My Todo List');
    expect(title).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  // Test 2: Initial Render - Add Todo Form
  test('renders the add todo form', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByRole('button', { name: /add todo/i });
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  // Test 3: Adding a New Todo
  test('adds a new todo when form is submitted', async () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Simulate user typing
    await userEvent.type(input, 'New Todo Item');
    
    // Simulate form submission
    fireEvent.click(button);
    
    // Check if new todo is added
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  // Test 4: Adding Multiple Todos
  test('adds multiple todos', async () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Add first todo
    await userEvent.type(input, 'First Todo');
    fireEvent.click(button);
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    
    // Add second todo
    await userEvent.type(input, 'Second Todo');
    fireEvent.click(button);
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
  });

  // Test 5: Empty Input Should Not Add Todo
  test('does not add a todo with empty text', async () => {
    render(<TodoList />);
    
    const button = screen.getByRole('button', { name: /add todo/i });
    const initialTodos = screen.getAllByRole('checkbox').length;
    
    // Try to add empty todo
    fireEvent.click(button);
    
    // Check that no new todo was added
    const finalTodos = screen.getAllByRole('checkbox').length;
    expect(finalTodos).toBe(initialTodos);
  });

  // Test 6: Toggling Todo Completion
  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    
    const checkbox = screen.getAllByRole('checkbox')[0];
    
    // Initially not completed
    expect(checkbox).not.toBeChecked();
    
    // Click to complete
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    // Click to uncomplete
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  // Test 7: Completed Todo Styling
  test('applies completed styling to completed todos', () => {
    render(<TodoList />);
    
    const firstTodoText = screen.getByText('Learn React');
    const firstLi = firstTodoText.closest('li');
    
    // Initially not completed
    expect(firstLi).not.toHaveClass('completed');
    
    // Toggle completion
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    
    // Should have completed class
    expect(firstLi).toHaveClass('completed');
  });

  // Test 8: Deleting a Todo
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Check initial todo exists
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Get delete button for first todo
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    
    // Click delete button for first todo
    fireEvent.click(deleteButtons[0]);
    
    // Check that todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Test 9: Deleting Multiple Todos
  test('can delete multiple todos independently', () => {
    render(<TodoList />);
    
    // Verify initial todos exist
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    
    // Get delete buttons
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    
    // Delete first todo
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    
    // Delete what is now the first todo
    const remainingDeleteButtons = screen.getAllByRole('button', { name: /delete/i });
    fireEvent.click(remainingDeleteButtons[0]);
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
  });

  // Test 10: Completed And Then Deleted
  test('can delete a completed todo', () => {
    render(<TodoList />);
    
    const checkbox = screen.getAllByRole('checkbox')[0];
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    
    // Complete and delete first todo
    fireEvent.click(checkbox);
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Test 11: Empty Todo List Message
  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos
    let deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    while (deleteButtons.length > 0) {
      fireEvent.click(deleteButtons[0]);
      deleteButtons = screen.queryAllByRole('button', { name: /delete/i });
    }
    
    // Check empty message appears
    expect(screen.getByText('No todos yet. Add one to get started!')).toBeInTheDocument();
  });

  // Test 12: Add Todo After All Deleted
  test('can add todo after all todos are deleted', async () => {
    render(<TodoList />);
    
    // Delete all todos
    let deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    while (deleteButtons.length > 0) {
      fireEvent.click(deleteButtons[0]);
      deleteButtons = screen.queryAllByRole('button', { name: /delete/i });
    }
    
    // Add new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByRole('button', { name: /add todo/i });
    
    await userEvent.type(input, 'New Todo After Delete All');
    fireEvent.click(button);
    
    expect(screen.getByText('New Todo After Delete All')).toBeInTheDocument();
    expect(screen.queryByText('No todos yet. Add one to get started!')).not.toBeInTheDocument();
  });
});
