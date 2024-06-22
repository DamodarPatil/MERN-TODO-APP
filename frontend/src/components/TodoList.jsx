import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, deleteTodo }) {
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  return (
    <ul className="w-full mb-8">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
