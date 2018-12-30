import React, { Component } from "react";
import ViewFBW from "../Views/ViewFBW";
import ViewEnd from "./ViewEnd";

class ControlView extends Component {
  state = {
    flag_end_view: false
  };
  handleEndWorkOut = () => {
    this.setState({
      flag_end_view: true
    });
  };
  render() {
    return (
      <>
        {this.state.flag_end_view ? (
          <ViewEnd />
        ) : (
          <ViewFBW data={this.props.data} endWorkOut={this.handleEndWorkOut} />
        )}
      </>
    );
  }
}

export default ControlView;
