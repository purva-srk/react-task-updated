import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "../actions/TodoActions";

const TodoRedux = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch;
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="todo">
      <h2>Todo List App in Redux</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="todo_input"
          placeholder="Enter a Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="todo_button" type="submit">
          Go
        </button>
      </form>
      <ul className="all_todos">
        {todos &&
          todos.map((t) => (
            <li key={t.id} className="single_todo">
              <span className="todo_text">{t.todo}</span>
              <button className="todo_list_button" onClick={removeHandler(t)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoRedux;
