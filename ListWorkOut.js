import React, { Component } from "react";

class ListWorkOut extends Component {
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
    this.props.addWorkOut(value);
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <>
        <h1>Lista cwiczen: </h1>
        <ul>
          {this.props.data.map(key => (
            <li>{key}</li>
          ))}
        </ul>
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

export default ListWorkOut;
