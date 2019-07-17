import React from "react";
import Task from "../Task/Task";
import PropTypes from "prop-types";

export default function TasksList(props) {
  return props.tasks.map(item => {
    return <Task key={item.id} data={item} />;
  });
}

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired
};
