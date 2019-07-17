import React from "react";
import PropTypes from "prop-types";

const getStyle = completed => {
  return {
    background: "#F4F4F4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none"
  };
};

export const TodoItem = ({ todo, markComplete, delTodo }) => {
  const { id, title, completed } = todo;
  return (
    <div style={getStyle(completed)}>
      <p>
        <input
          type="checkbox"
          onChange={() => markComplete(id)}
          checked={completed ? "checked" : ""}
        />{" "}
        {title}
        <button onClick={() => delTodo(id)} style={{ float: "right" }}>
          <i class="fa fa-trash" aria-hidden="true" />
        </button>
      </p>
    </div>
  );
};

TodoItem.PropTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
