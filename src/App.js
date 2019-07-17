import React, { Component } from "react";
import data from "./datasample/tasks.json";
import TasksList from "./components/TasksList/TasksList";
import NewTask from "./components/Task/NewTask/NewTask.jsx";

class App extends Component {
  state = {
    tasks: data
  };
  render() {
    return (
      <ul>
        <TasksList tasks={this.state.tasks} />
        <NewTask />
      </ul>
    );
  }
}
export default App;
