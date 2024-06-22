import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Item"
        className="flex-grow p-4 text-xl border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-4 text-xl rounded-r hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
