import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoSlice";

const Todo = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };
  const [todo, setTodo] = useState("");
  return (
    <>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="button" onClick={() => dispatch(addTodos(todo))}>
        Add
      </button>
    </>
  );
};

export default Todo;

// addTodos is action and payload is the text typed in
// input box (which is called todo here).
// Syntax given in line 16.
