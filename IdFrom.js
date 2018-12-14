import React, { Component } from "react";

class IdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: [],
      lenght: this.props.lenghtList
    };
  }
  componentDidMount = () => {
    this.supplyIdArray();
  };
  componentDidUpdate = () => {
    if (this.props.lenghtList !== this.state.lenght) {
      this.setState({
        lenght: this.props.lenghtList
      });
      this.supplyIdArray();
    }
  };
  supplyIdArray = () => {
    const newArr = [];
    for (let i = 0; i < this.props.lenghtList; i++) {
      newArr.push(i + 1);
    }
    this.setState({
      idArray: newArr
    });
  };
  handleChangeId = e => {
    this.props.changeId(e.target.value);
  };
  render() {
    console.log("IdForm");
    return (
      <select onChange={this.handleChangeId}>
        {this.state.idArray.map(list => (
          <option>{list}</option>
        ))}
      </select>
    );
  }
}

export default IdForm;
