import React, { Component } from "react";
import data from "./datasample/tasks.json";
import TasksList from "./components/TasksList/TasksList";
import NewTask from "./components/Task/NewTask/NewTask.jsx";

class App extends Component {
  state = {
    tasks: data
  };
  addTask = (title, description) => {
    console.log(title, description);
    const newTask = {
      title,
      description,
      id: this.state.tasks.length + 1
    };
    console.log(newTask);
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };
  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };
  updateTask = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
    console.log("Updated", this.state.tasks);
  };
  render() {
    return (
      <ul>
        <TasksList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          update={this.updateTask}
        />
        <NewTask addTask={this.addTask} />
      </ul>
    );
  }
}
export default App;
