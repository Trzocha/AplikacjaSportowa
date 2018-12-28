import React, { Component } from "react";
import Clock from "../src/Clock";

class StartApp extends Component {
  render() {
    return (
      <>
        {this.props.active ? (
          <Clock value={this.props.data["opcje_listy"]["ilosc_przerwy_ser"]} />
        ) : null}
      </>
    );
  }
}

export default StartApp;
