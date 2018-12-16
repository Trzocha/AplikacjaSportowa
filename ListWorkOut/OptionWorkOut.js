import React, { Component } from "react";

class OptionWorkOut extends Component {
  render() {
    const it = this.props.data;
    return (
      <>
        Ilość powturzeń w cwiczeniu: {it["ilosc powt_w_cw"]}{" "}
        <input type="number" min="1" max="50" />
        <input type="submit" />
        <br />
        Ilość dodadkowego obciażenia [kg]:{it["ilosc_dod_obc"]}
        <input type="number" min="0" max="50" />
        <input type="submit" />
        <br />
        Opis cwieczenia: {it.opis} <input type="text" />
        <input type="submit" />
      </>
    );
  }
}

export default OptionWorkOut;
