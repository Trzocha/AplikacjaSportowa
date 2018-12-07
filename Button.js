import React, { Component } from "react";
import Clock from "../src/Clock.js";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }
  onButtonClick = () => {
    this.setState(state => ({ visible: !state.visible }));
  };
  render() {
    return (
      <div>
        <input type="button" value="Click me" onClick={this.onButtonClick} />
        {this.state.visible && <Clock value="60" />}
      </div>
    );
  }
}

export default Button;
