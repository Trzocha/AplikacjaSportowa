import React, { Component } from "react";

class OptionWorkOut extends Component {
  render() {
    return (
      <>
        Ilość powturzeń w cwiczeniu: <input type="number" min="1" max="50" />
        <input type="submit" />
        <br />
        Ilość dodadkowego obciażenia [kg]:{" "}
        <input type="number" min="0" max="50" />
        <input type="submit" />
        <br />
        Opis cwieczenia: <input type="text" />
        <input type="submit" />
      </>
    );
  }
}

export default OptionWorkOut;
