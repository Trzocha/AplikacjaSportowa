import React, { Component } from "react";
import FieldChange from "../ListWorkOut/FieldChange";

class OptionList extends Component {
  state = {
    flagButton_1: false,
    flagButton_2: false,
    flagButton_3: false
  };
  handleClick = e => {
    console.log(e.target.id);
    // console.log(e.target.value);
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
  handleChange = e => {
    console.log("change");
    console.log(e.target.value);
  };
  changeInput = () => {};
  render() {
    const it = this.props.data;
    return (
      <>
        Ilosc Przerwy miedzy cwiczeniami [sek]:{it.ilosc_przerwy_cw + "   "}
        {this.state.flagButton_1 ? (
          <FieldChange
            min="0"
            max="120"
            id="1"
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        ) : (
          <input
            type="button"
            id="1"
            value="Zmien"
            onClick={this.handleClick}
          />
        )}
        <br />
        Ilosc Przerwy miedzy seriami [sek]:{it.ilosc_przerwy_ser + "  "}
        {this.state.flagButton_2 ? (
          <FieldChange
            min="1"
            max="179"
            id="2"
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        ) : (
          <input
            type="button"
            id="2"
            value="Zmien"
            onClick={this.handleClick}
          />
        )}
        <br />
        Ilosc serii: {it.ilosc_ser}{" "}
        {this.state.flagButton_3 ? (
          <FieldChange
            min="1"
            max="10"
            id="3"
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
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

export default OptionList;
