import React, { Component } from "react";
import OptionList from "./OptionWorkOut";

class OptionPanel extends Component {
  state = { value: true };
  handleClik = () => {
    this.setState(prevState => ({
      value: !prevState.value
    }));
  };
  render() {
    return (
      <>
        {/* {this.props.data.map(key => (
          <>
            <li>{key}</li>
            {this.state.value ? <OptionList /> : null}
            <input type="button" onClick={this.handleClik} />
          </>
        ))} */}
        <li>POMPKI</li>
        {this.state.value ? <OptionList /> : null}
        <input type="button" onClick={this.handleClik} />
        <br />
        <li>PODCIAGANIE</li>
        {this.state.value ? <OptionList /> : null}
        <input type="button" onClick={this.handleClik} />
      </>
    );
  }
}

export default OptionPanel;
