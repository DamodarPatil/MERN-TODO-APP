import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:5000/api/todos");
    setTodos(response.data);
  };

  const addTodo = async (text) => {
    const response = await axios.post("http://localhost:5000/api/todos", {
      text,
    });
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8 dark:bg-gray-900 transition duration-500">
      <div className="bg-white rounded-lg shadow-lg p-10 dark:bg-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 transition duration-500">
          You have {todos.length} Todos
        </h1>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
