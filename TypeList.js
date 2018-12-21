import React, { Component } from "react";

class TypeList extends Component {
  state = {
    isConfirmed: true
  };
  handleChange = e => {
    this.props.ChangeTypeList(e);
    this.setState(prevState => ({
      isConfirmed: !prevState.isConfirmed
    }));
  };
  render() {
    console.log("TypeList");
    return (
      <>
        <form onChange={this.handleChange}>
          <input
            type="radio"
            id="FBW"
            name="gender"
            value="FBW"
            checked={this.state.isConfirmed}
          />
          <label htmlFor="FBW">Z własna masą ciała</label>
          <input type="radio" id="WEIGHT" name="gender" value="WEIGHT" />
          <label htmlFor="WEIGHT"> Z ciężarami</label>
        </form>
      </>
    );
  }
}

export default TypeList;
