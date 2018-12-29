import React, { Component } from "react";
import Clock from "../Views/Clock";

class ViewFBW extends Component {
  state = {
    descriptions: [],
    names: [],
    options: [],
    amountSeries: this.props.data["opcje_listy"]["ilosc_ser"],
    amountWorkOut: this.props.data["opcje_listy"]["ilosc_cwiczen"],
    hideView: false
  };

  componentDidMount = () => {
    // const amountWorkOut = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    const data = this.props.data["seria_1"];
    const copy_descriptions = [];
    const copy_names = [];
    const copy_options = [];

    for (let i = 0; i < this.state.amountWorkOut; i++) {
      copy_descriptions[i] = data["cw_" + (i + 1)]["opis"];
      copy_names[i] = data["cw_" + (i + 1)]["name"];
    }

    for (let i = 0; i < this.state.amountWorkOut; i++) {
      copy_options[i] = new Array();
      for (let j = 1; j <= this.state.amountWorkOut; j++) {
        const helper_counter = j * 2;
        copy_options[i][j - 1] = this.props.data["seria_" + (i + 1)]["cw_" + j][
          "ilosc_dod_obc"
        ];
        copy_options[i][j + 1] = this.props.data["seria_" + (i + 1)][
          "cw_" + (j + 1)
        ]["ilosc_powt_w_cw"];
      }
    }

    this.setState({
      descriptions: copy_descriptions,
      names: copy_names,
      options: copy_options
    });
  };
  handlerClick = () => {
    this.setState({
      hideView: true
    });
  };
  handlerNext = () => {
    this.setState({
      hideView: false
    });
  };
  render() {
    return (
      <>
        {this.state.hideView ? (
          <Clock value="8" next={this.handlerNext} />
        ) : (
          <div>
            <h1>Seria 1</h1>
            <ul>
              <li>{this.state.names[0]}</li>
              <li>Ilość powturzeń :</li>
              <li>Dodadkowy ciężar: </li>
              <li>{this.state.descriptions[0]}</li>
            </ul>
            <input type="button" value="NEXT" onClick={this.handlerClick} />
          </div>
        )}
      </>
    );
  }
}

export default ViewFBW;
