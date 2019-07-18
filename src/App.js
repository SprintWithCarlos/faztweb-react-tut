import React, { Component, Fragment } from "react";
// import data from "./datasample/tasks.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TasksList from "./components/TasksList/TasksList";
import NewTask from "./components/Task/NewTask/NewTask.jsx";
import PostsList from "./components/PostsList/PostsList.jsx";
import UsersList from "./components/users/UsersList";
import Nav from "./components/Nav/Nav";

class App extends Component {
  state = {
    tasks: [],
    users: []
  };
  async componentDidMount() {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tasks = await res1.json();

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    this.setState({ tasks, users });
  }

  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tasks.length + 1
    };

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
  };
  render() {
    return (
      <Router>
        <Nav />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Fragment>
                <ul>
                  <TasksList
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    update={this.updateTask}
                  />
                </ul>
                <NewTask addTask={this.addTask} />
              </Fragment>
            );
          }}
        />
        <Route
          path="/users"
          render={() => {
            return <UsersList users={this.state.users} />;
          }}
        />
        <Route path="/posts" component={PostsList} />
      </Router>

      /*  <Fragment>
        <UsersList users={this.state.users} />
        <ul>
          <TasksList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            update={this.updateTask}
          />
        </ul>
        <NewTask addTask={this.addTask} />
        <PostsList />
      </Fragment> */
    );
  }
}
export default App;
