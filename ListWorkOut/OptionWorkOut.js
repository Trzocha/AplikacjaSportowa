import React, { Component } from "react";
import FieldChange from "../ListWorkOut/FieldChange";

class OptionWorkOut extends Component {
  state = {
    flagButton_1: false,
    flagButton_2: false,
    flagButton_3: false,
    flagButton_4: false,
    draft: ""
  };
  handleClick = e => {
    let clearDraft = false;
    // console.log(e.target.id);
    if (e.target.id === "1") {
      this.setState(prevState => ({
        flagButton_1: !prevState.flagButton_1
      }));
      if (this.state.flagButton_1) {
        // console.log(e.target.id + " , " + this.state.draft);
        this.props.changeValue(
          e.target.id, //numer przyciku zmiany
          this.state.draft, //wartosc zmiany
          this.props.number //numer cwiczenia
        );
        clearDraft = true;
      }
    } else if (e.target.id === "2") {
      this.setState(prevState => ({
        flagButton_2: !prevState.flagButton_2
      }));
      if (this.state.flagButton_2) {
        // console.log(e.target.id + " , " + this.state.draft);
        this.props.changeValue(
          e.target.id, //numer przyciku zmiany
          this.state.draft, //wartosc zmiany
          this.props.number //numer cwiczenia
        );
        clearDraft = true;
      }
    } else if (e.target.id === "3") {
      this.setState(prevState => ({
        flagButton_3: !prevState.flagButton_3
      }));
      if (this.state.flagButton_3) {
        // console.log(e.target.id + " , " + this.state.draft);
        this.props.changeValue(
          e.target.id, //numer przyciku zmiany
          this.state.draft, //wartosc zmiany
          this.props.number //numer cwiczenia
        );
        clearDraft = true;
      }
    } else if (e.target.id === "4") {
      this.setState(prevState => ({
        flagButton_4: !prevState.flagButton_4
      }));
      if (this.state.flagButton_4) {
        // console.log(e.target.id + " , " + this.state.draft);
        this.props.changeValue(
          e.target.id, //numer przyciku zmiany
          this.state.draft, //wartosc zmiany
          this.props.number //numer cwiczenia
        );
        clearDraft = true;
      }
    }

    if (clearDraft) {
      this.setState({
        draft: ""
      });
    }
  };
  handleChange = e => {
    // console.log("changeWorkOut");
    // console.log(e.target.value);
    // console.log(this);
    this.setState({
      draft: e.target.value
    });
  };
  render() {
    const it = this.props.data;
    console.log("OptionWorkOut");
    return (
      <>
        Ilość powturzeń w cwiczeniu: {it["ilosc_powt_w_cw"]}{" "}
        {this.state.flagButton_1 ? (
          <FieldChange
            min="1"
            max="50"
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
        Ilość dodadkowego obciażenia [kg]:{it["ilosc_dod_obc"]}
        {this.state.flagButton_2 ? (
          <FieldChange
            min="0"
            max="50"
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
        Opis cwieczenia: {it.opis}{" "}
        {this.state.flagButton_3 ? (
          <FieldChange
            text="true"
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
        {this.state.flagButton_4 ? (
          <FieldChange
            text="true"
            id="4"
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        ) : (
          <input
            type="button"
            id="4"
            value="Zmien nazwe cwiczenia"
            onClick={this.handleClick}
          />
        )}
        <br />
      </>
    );
  }
}

export default OptionWorkOut;
