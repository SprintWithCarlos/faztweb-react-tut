import React, { Component } from "react";
import Task from "../Task/Task";
export default class TasksList extends Component {
  render() {
    return this.props.tasks.map(item => {
      return (
        <Task
          key={item.id}
          data={item}
          delete={this.props.delete}
          update={this.props.update}
        />
      );
    });
  }
}
