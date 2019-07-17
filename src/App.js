import React, { Component } from "react";
import data from "./datasample/tasks.json";
import TasksList from "./components/TasksList/TasksList";

class App extends Component {
  state = {
    tasks: data
  };
  render() {
    return (
      <ul>
        <TasksList tasks={this.state.tasks} />
      </ul>
    );
  }
}
export default App;
