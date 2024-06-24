import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = (list) => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    const deletetudo = todos.filter((e) => e.id !== id);
    setTodos(deletetudo);
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const select = todos.map((e) => {
      if (e.id === id) {
        e.checked = !e.checked;
        return e;
      }
      return e;
    });
    setTodos(select);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
