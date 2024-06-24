import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  console.log(todos, 'iam from todoresult');
  const calculateChecked = () => todos.length;

  console.log(calculateChecked(), 'iam function....');

  return (
    <div className="todo-results">
      { calculateChecked() || 0 }
      {/* {calculateChecked()} */}
    </div>
  );
};
