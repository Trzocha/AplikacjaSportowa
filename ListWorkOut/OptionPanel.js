import React, { Component } from "react";

class OptionPanel extends Component {
  render() {
    return (
      <>
        {this.props.data.map(key => (
          <>
            <li>{key}</li>
            <input type="checkbox" />
            5kg
          </>
        ))}
      </>
    );
  }
}

export default OptionPanel;
