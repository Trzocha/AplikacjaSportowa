import React, { Component } from "react";
import FieldChange from "../ListWorkOut/FieldChange";

class OptionWorkOut extends Component {
  state = {
    flagButton_1: false,
    flagButton_2: false,
    flagButton_3: false
  };
  handleClick = e => {
    console.log(e.target.id);
    if (e.target.id === "1") {
      this.setState(prevState => ({
        flagButton_1: !prevState.flagButton_1
      }));
    } else if (e.target.id === "2") {
      this.setState(prevState => ({
        flagButton_2: !prevState.flagButton_2
      }));
    } else if (e.target.id === "3") {
      this.setState(prevState => ({
        flagButton_3: !prevState.flagButton_3
      }));
    }
  };
  render() {
    const it = this.props.data;
    return (
      <>
        Ilość powturzeń w cwiczeniu: {it["ilosc_powt_w_cw"]}{" "}
        {this.state.flagButton_1 ? (
          <FieldChange min="1" max="50" id="1" handleClick={this.handleClick} />
        ) : (
          <input
            type="button"
            id="1"
            value="Zmien"
            onClick={this.handleClick}
          />
        )}
        <br />
        Ilość dodadkowego obciażenia [kg]:{it["ilosc_dod_obc"]}
        {this.state.flagButton_2 ? (
          <FieldChange min="0" max="50" id="2" handleClick={this.handleClick} />
        ) : (
          <input
            type="button"
            id="2"
            value="Zmien"
            onClick={this.handleClick}
          />
        )}
        <br />
        Opis cwieczenia: {it.opis}{" "}
        {this.state.flagButton_3 ? (
          <FieldChange text="true" id="3" handleClick={this.handleClick} />
        ) : (
          <input
            type="button"
            id="3"
            value="Zmien"
            onClick={this.handleClick}
          />
        )}
        <br />
      </>
    );
  }
}

export default OptionWorkOut;
