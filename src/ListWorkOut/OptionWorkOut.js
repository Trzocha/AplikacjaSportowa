import React, { Component } from "react";
import FieldChange from "../ListWorkOut/FieldChange";
import styled from "styled-components";

const ContenerOptions = styled.form`
  width: 95%;
  margin: 0 auto;
  font-family: "Play";
  font-size: 12px;
  background: #3e4a56;
  padding-top: 5px;
  border-radius: 10px;
  text-align: left;
`;
const Button = styled.input`
  position: absolute;
  right: 20px;
  width: 80px;
  color: #eee;
  border: 2px solid #eee;
  background-color: transparent;
  cursor: pointer;
  line-height: 2;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  font-size: 8px;
  text-transform: uppercase;
  outline: none;
  flex-basis: 40%;
  :active {
    border: 2px solid #2ecc71;
  }
`;
const Button2 = styled(Button)`
  width: 140px;
  padding: 2px 5px;
`;
const ButtonDelete = styled.button`
  position: absolute;
  right: 30px;
  height: 30px;
  color: #eee;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
`;
const WorkOut = styled.p`
  position: absolute;
  width: 55%;
  text-justify: center;
`;
const Field = styled.fieldset`
  height: ${props => (props.more ? "50px" : "30px")};
  border: none;
  margin: ${props => (props.more ? "10px 0 15px 10px" : "10px 0 0 10px")};
`;

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
    if (e.target.id === "1") {
      this.setState(prevState => ({
        flagButton_1: !prevState.flagButton_1
      }));
      if (this.state.flagButton_1) {
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
    this.setState({
      draft: e.target.value
    });
  };
  deleteWorkOut = () => {
    const number_workout = this.props.number;
    this.props.deleteWorkOut(number_workout);
  };
  render() {
    const it = this.props.data;
    // console.log("OptionWorkOut");
    return (
      <ContenerOptions>
        <Field>
          <WorkOut>Powturzenia w cwiczeniu: {it["ilosc_powt_w_cw"]}</WorkOut>
          {this.state.flagButton_1 ? (
            <FieldChange
              id="1"
              handleClick={this.handleClick}
              handleChange={this.handleChange}
            />
          ) : (
            <Button
              type="button"
              id="1"
              value="Zmien"
              onClick={this.handleClick}
            />
          )}
          <br />
        </Field>
        <Field>
          <WorkOut>Dodadkowe obciażenie [kg]:{it["ilosc_dod_obc"]}</WorkOut>
          {this.state.flagButton_2 ? (
            <FieldChange
              id="2"
              handleClick={this.handleClick}
              handleChange={this.handleChange}
            />
          ) : (
            <Button
              type="button"
              id="2"
              value="Zmien"
              onClick={this.handleClick}
            />
          )}
          <br />
        </Field>
        <Field more={true}>
          <WorkOut>
            Opis ćwieczenia: <br /> {it.opis}
          </WorkOut>
          {this.state.flagButton_3 ? (
            <FieldChange
              row="2"
              maxLenght="80"
              text="true"
              id="3"
              handleClick={this.handleClick}
              handleChange={this.handleChange}
            />
          ) : (
            <Button
              type="button"
              id="3"
              value="Zmien"
              onClick={this.handleClick}
            />
          )}
          <br />
        </Field>
        <Field>
          {this.state.flagButton_4 ? (
            <FieldChange
              row="1"
              maxLenght="30"
              text="true"
              id="4"
              handleClick={this.handleClick}
              handleChange={this.handleChange}
            />
          ) : (
            <Button2
              type="button"
              id="4"
              value="Zmień nazwe ćwiczenia"
              onClick={this.handleClick}
            />
          )}
        </Field>
        <Field>
          <ButtonDelete
            type="button"
            value=""
            onClick={this.deleteWorkOut}
            className="fas fa-trash-alt"
          />
          <br />
        </Field>
      </ContenerOptions>
    );
  }
}

export default OptionWorkOut;
