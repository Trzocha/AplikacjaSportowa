import React, { Component } from "react";
import FieldChange from "../ListWorkOut/FieldChange";

class OptionList extends Component {
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
  changeInput = () => {};
  render() {
    const it = this.props.data;
    console.log("OptionList");
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
        <input //nalezy zmienic z tego co jest na 2 przycisku "dadaj" , "usun"
          type="button"
          id="3"
          value="Dodaj"
          onClick={this.handleClick}
        />
        <input type="button" id="4" value="Usun" onClick={this.handleClick} />
        <br />
      </>
    );
  }
}

export default OptionList;
