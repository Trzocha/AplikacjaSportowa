import React, { Component } from "react";

class IdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: []
    };
    for (let i = 0; i < this.props.lenghtList; i++) {
      //dokumentacja nie pozwala uzywac w construktorze setState, ale jezel to
      //przeniose do componentDidMout to mam blad "this.state.idArray.map is not a function"
      this.setState({
        idArray: this.state.idArray.push(i + 1)
      });
    }
  }
  //   componentDidMount = () => {
  //     for (let i = 0; i < this.props.lenghtList; i++) {
  //       this.setState({
  //         idArray: this.state.idArray.push(i + 1)
  //       });
  //     }
  //   };
  handleChangeId = e => {
    console.log(e.target.value);
    this.props.changeId(e.target.value);
  };
  render() {
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
