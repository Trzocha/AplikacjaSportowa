import React, { Component } from "react";

class OptionList extends Component {
  render() {
    return (
      <>
        Ilosc Przerwy miedzy cwiczeniami [sek]:{" "}
        <input type="number" min="0" max="179" />
        <input type="submit" />
        <br />
        Ilosc Przerwy miedzy seriami [sek]:{" "}
        <input type="number" min="0" max="179" />
        <input type="submit" />
        <br />
        Ilosc serii: <input type="number" min="0" max="10" />
        <input type="submit" />
        <br />
      </>
    );
  }
}

export default OptionList;
