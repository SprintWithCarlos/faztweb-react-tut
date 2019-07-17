import React from "react";
import Task from "../Task/Task";

export default function TasksList(props) {
  return props.tasks.map(item => {
    return <Task key={item.id} data={item} />;
  });
}
