import React from "react";
import "./Task.css";
export default function Task(props) {
  const { id, title, description, completed } = props.data;
  return completed ? (
    <li className="task completed">
      {id} - {title} - {completed}- {description}
      <input
        type="checkbox"
        name=""
        id=""
        onChange={props.update.bind(this, id)}
      />
      <button onClick={props.delete.bind(this, id)}>Click</button>
    </li>
  ) : (
    <li className="task pending">
      {id} - {title} - {completed}- {description}
      <input
        type="checkbox"
        name=""
        id=""
        onChange={props.update.bind(this, id)}
      />
      <button onClick={props.delete.bind(this, id)}>Click</button>
    </li>
  );
}
