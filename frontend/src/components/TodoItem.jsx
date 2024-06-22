import PropTypes from "prop-types";

function TodoItem({ todo, deleteTodo }) {
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-5 my-4 border rounded shadow-sm transition duration-300 hover:shadow-md dark:bg-gray-700">
      <span className="text-xl text-gray-900 dark:text-gray-200">{todo.text}</span>
      <button 
        onClick={() => deleteTodo(todo._id)} 
        className="bg-red-500 text-white p-2 text-xl rounded hover:bg-red-600 transition duration-300"
      >
        &#x2715;
      </button>
    </li>
  );
}

export default TodoItem;
