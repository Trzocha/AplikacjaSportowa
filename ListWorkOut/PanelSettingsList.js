import React, { Component } from "react";
import FieldChange from "./FieldChange";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  /* display: flex; */
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: #455361;
  margin-bottom: 10px;
`;

const Header = styled.div`
  flex-wrap: nowrap;
  padding: 11px 0 12px 10px;
  text-align: left;
  font-family: "Play";
  height: 42px;
  font-size: 12px;
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
  :active {
    border: 2px solid #2ecc71;
  }
`;
const Button2 = styled(Button)`
  width: 35px;
  right: ${props => (props.value === "-" ? "65px" : "20px")};
`;

class PanelSettingsList extends Component {
  state = {
    flagButton_1: false,
    flagButton_2: false,
    draft: ""
  };
  //funcja dziala nastepujaco , gdy flaga przycisku ustawiona jest na true, to nastepne jego przycisniecie daje "zatwuerdz zmienna",
  //dlatego zmieniam flage przycisku na przeciwnym w setState  a ze zmiana odrazu nie laduje w state, sprawdzam warunek ktory jeszcze
  //jest prawdziwy i wywoluje funkcje, ktora zbiera potrzebne dane by wywolac funcke w App i dokonac zmiany w glownym obiecie DANE
  handleClick = e => {
    let clearDraft = false;

    if (e.target.id === "1") {
      // setTimeout(this.paralize, 1000);

      this.setState(prevState => ({
        flagButton_1: !prevState.flagButton_1
      }));
      if (this.state.flagButton_1) {
        this.props.changeValue(e.target.id, this.state.draft);
        clearDraft = true;
      }
    } else if (e.target.id === "2") {
      this.setState(prevState => ({
        flagButton_2: !prevState.flagButton_2
      }));
      if (this.state.flagButton_2) {
        this.props.changeValue(e.target.id, this.state.draft);
        clearDraft = true;
      }
    } else if (e.target.id === "3" || e.target.id === "4") {
      //gdy dodaje serie lub usuwam
      this.props.changeValue(e.target.id, "");
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
  paralize = () => {
    this.setState(prevState => ({
      flagButton_1: !prevState.flagButton_1
    }));
  };
  render() {
    const it = this.props.data;
    // console.log("OptionList");
    return (
      <>
        <StyledSection>
          <Header>
            <span>Przerwa między ćwiczeniami [sek]: {it.ilosc_przerwy_cw}</span>
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
                value="Zmień"
                onClick={this.handleClick}
                pose={this.state.flagButton_1 ? "hide" : "show"}
              />
            )}
            <br />
          </Header>
          <Header>
            <span>Przerwa między seriami [sek]:{it.ilosc_przerwy_ser}</span>
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
                value="Zmień"
                onClick={this.handleClick}
              />
            )}
            <br />
          </Header>
          <Header>
            <span>Ilość serii:{it.ilosc_ser} </span>
            <Button2
              type="button"
              id="3"
              value="+"
              onClick={this.handleClick}
            />
            <Button2
              type="button"
              id="4"
              value="-"
              onClick={this.handleClick}
            />
            <br />
          </Header>
        </StyledSection>
      </>
    );
  }
}

export default PanelSettingsList;
