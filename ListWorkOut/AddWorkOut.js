import React, { Component } from "react";

class AddWorkOut extends Component {
  state = {
    value: "",
    data: this.props.data //nie powinno sie tak robic, ale to tylko dla odczytu
  };
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleClick = () => {
    const value = this.state.value;
    const name = this.state.data;
    this.props.add(value, name); //wysalanie danych do App
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
