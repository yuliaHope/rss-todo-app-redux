import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/reducer'; 

const inputStyle = { flex: "10", padding: "5px" };
const formStyle = { display: "flex" };
const submitStyle =  { flex: "1" };

export function AddTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  }, [title]);

  const onChange = useCallback((e) => setTitle(e.target.value));

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <input
        type="text"
        name="title"
        style={inputStyle}
        placeholder="Add Todo..."
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={submitStyle}
      />
    </form>
  );
}

export default AddTodo;
