import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;

  select {
    background: #2c3e50;
    color: #eee;
    padding: 5px;
    margin-top: 10px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
    -webkit-appearance: button;
    outline: none;
  }
  :before {
    content: "\f358";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    top: 10px;
    left: 50%;
    width: 25px;
    height: 30px;
    background: #455361;
    border-radius: 0 5px 5px 0;
    text-align: center;
    line-height: 32px;
    font-size: 12px;
    color: #fff;
    pointer-events: none;
  }
  :hover::before {
    background: #455361;
  }
`;

class IdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: [],
      value: this.props.idList || 1 //wartosc ktora pokazuje <select>
    };
  }
  componentDidMount = () => {
    this.supplyIdArray();
  };
  componentDidUpdate = prevProps => {
    //sprawdza dlugosci list przed usunieciem lub po dodaniu
    if (
      prevProps.lenghtList < this.props.lenghtList ||
      prevProps.lenghtList > this.props.lenghtList
    ) {
      if (this.props.idList === this.props.lenghtList) {
        this.setState({
          value: this.props.lenghtList //odpowiedzialny za to, gdy dodajemy nowa liste <select value{}> skoczylo na stworzona liste
        });
      }
      this.supplyIdArray();
    }
  };
  supplyIdArray = () => {
    //wypelnienie id listy
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
    // console.log("IdForm");
    return (
      <StyledDiv>
        <select onChange={this.handleChangeId} value={this.state.value}>
          {this.state.idArray.map(number => (
            <option key={number}>{number}</option>
          ))}
        </select>
      </StyledDiv>
    );
  }
}

export default IdForm;
