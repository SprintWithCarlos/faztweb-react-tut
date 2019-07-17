import React from "react";
import "./Task.css";
export default function Task(props) {
  const { id, title, description, done } = props.data;
  return done ? (
    <li className="task completed">
      {id} - {title} - {done}- {description}
      <input type="checkbox" name="" id="" />
      <button>Click</button>
    </li>
  ) : (
    <li className="task pending">
      {id} - {title} - {done}- {description}
      <input type="checkbox" name="" id="" />
      <button>Click</button>
    </li>
  );
}
