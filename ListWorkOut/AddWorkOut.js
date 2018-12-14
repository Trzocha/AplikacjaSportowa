import React, { Component } from "react";

class AddWorkOut extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleClick = () => {
    const value = this.state.value;
    this.props.add(value);
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <>
        <input
          value={this.state.value}
          type="text"
          placeholder="nazwa cwiczenia"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Dodaj</button>
      </>
    );
  }
}

export default AddWorkOut;
