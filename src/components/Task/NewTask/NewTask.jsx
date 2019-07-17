import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewTask extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <form>
        <input type="text" name="" id="" placeholder="Create a new task" />
        <br />
        <textarea
          name=""
          id=""
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
