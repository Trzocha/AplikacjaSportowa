import React, { Component } from "react";

class NewList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addNew}>+</button>
      </div>
    );
  }
}

export default NewList;
