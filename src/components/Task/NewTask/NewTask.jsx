import React, { Component } from "react";

export default class NewTask extends Component {
  state = {
    title: "",
    description: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Create a new task"
          name="title"
          onChange={this.onChange}
        />
        <br />
        <textarea
          value={this.state.description}
          onChange={this.onChange}
          name="description"
          cols="30"
          rows="10"
          placeholder="Add description"
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
