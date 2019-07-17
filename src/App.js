import React, { Component } from "react";
// import data from "./datasample/tasks.json";
import TasksList from "./components/TasksList/TasksList";
import NewTask from "./components/Task/NewTask/NewTask.jsx";
import PostsList from "./components/PostsList/PostsList.jsx";

class App extends Component {
  state = {
    tasks: []
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    this.setState({ tasks: data });
  }
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
        task.completed = !task.completed;
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
        <PostsList />
      </ul>
    );
  }
}
export default App;
