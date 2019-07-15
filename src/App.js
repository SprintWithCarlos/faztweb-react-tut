import React, { Fragment } from "react";

import "./App.css";
function Helloworld(props) {
  return (
    <div id="numberone">
      <h1>
        Hello {props.myname} {props.mylastname}
      </h1>
    </div>
  );
}
class Newhelloworld extends React.Component {
  state = {
    show: true
  };
  toggleButton = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return this.state.show ? (
      <div>
        <h1>
          Hello {this.props.myname} {this.props.mylastname}
        </h1>
        <button onClick={this.toggleButton}>Toggle Button</button>
      </div>
    ) : (
      <div>
        <p> No show</p>
        <button onClick={this.toggleButton}>Toggle Show</button>
      </div>
    );
  }
}

function App() {
  return (
    <Fragment>
      <div>
        This is my component:{" "}
        <Helloworld myname="Carlos" mylastname="Marchena" />{" "}
      </div>
      <div>
        The new component{" "}
        <Newhelloworld myname="Carlos" mylastname="Marchena" />
      </div>
    </Fragment>
  );
}

export default App;
