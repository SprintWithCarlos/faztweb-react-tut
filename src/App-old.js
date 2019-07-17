import React, { Component, Fragment } from "react";
import tasks from "./datasample/tasks.json";

function Item(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.id}</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
function Tasks(props) {
  props.map(item => {
    <Item data="item" />;
  });
  return <Tasks />;
}
class App extends Component {
  state = {
    tasks
  };

  render() {
    /* return (
      <div>
        {this.state.tasks.map(item => (
          <Fragment>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Fragment>
        ))}
      </div>
    ); */

    return (
      <Fragment>
        <Tasks tasks={this.state.tasks} />
      </Fragment>
    );
  }
}

export default App;
