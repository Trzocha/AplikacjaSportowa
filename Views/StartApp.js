import React, { Component } from "react";
import ViewFBW from "../Views/ViewFBW";

class StartApp extends Component {
  render() {
    return <>{this.props.active ? <ViewFBW data={this.props.data} /> : null}</>;
  }
}

export default StartApp;
