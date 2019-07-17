import React from "react";

export default function Post(props) {
  const { title, body } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
