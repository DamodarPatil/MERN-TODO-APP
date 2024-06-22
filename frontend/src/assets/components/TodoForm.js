import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

return(
    <>
    </>
)
};

export default TodoForm;
