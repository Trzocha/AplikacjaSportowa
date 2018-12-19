import React, { Component } from "react";

class IdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: [],
      lenght: this.props.lenghtList,
      value: 1 //wartosc ktora pokazuje <select>
    };
  }
  componentDidMount = () => {
    this.supplyIdArray();
  };
  componentDidUpdate = () => {
    if (this.props.lenghtList !== this.state.lenght) {
      this.setState({
        lenght: this.props.lenghtList,
        value: this.props.lenghtList //odpowiedzialny za to, gdy dodajemy nowa liste <select value{}> skoczylo na stworzona liste
      });
      this.supplyIdArray();
    }
  };
  supplyIdArray = () => {
    //wypelnienie id listy
    console.log(this.props.lenghtList);
    const newArr = [];
    for (let i = 0; i < this.props.lenghtList; i++) {
      //bylo this.state.lenght, lecz opozmialo to wyswietlanie odpowiednich list
      newArr.push(i + 1);
    }
    this.setState({
      idArray: newArr
    });
  };
  handleChangeId = e => {
    this.setState({
      //setState odpowiedzialny za zmiane id w <select> gdy przechodzimy miedzy opcjami
      value: e.target.value
    });
    this.props.changeId(e.target.value); //funckja odpowiedzialna za zmiane zawartosci list wg id
  };
  render() {
    return (
      <select onChange={this.handleChangeId} value={this.state.value}>
        {this.state.idArray.map(number => (
          <option>{number}</option>
        ))}
      </select>
    );
  }
}

export default IdForm;
