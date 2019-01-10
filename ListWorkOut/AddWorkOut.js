import React, { Component } from "react";
import styled from "styled-components";

const Cointainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextArea = styled.textarea`
  font-size: 12px;
  border-radius: 5px;
  border: none;
  width: 150px;
  height: 30px;
  text-align: center;
  padding-top: 5px;
  :focus {
    border: 1px solid #2ecc71;
  }
`;
const Button = styled.button`
  font-size: 12px;
  margin-left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #2ecc71;
  color: #eee;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
`;

class AddWorkOut extends Component {
  state = {
    draft: ""
    // data: this.props.data //nie powinno sie tak robic, ale to tylko dla odczytu
  };
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      draft: e.target.value
    });
  };
  handleClick = () => {
    const value = this.state.draft;
    const name = this.props.data;
    if (value !== "") {
      this.props.callBackClick();
      this.props.add(value, name); //wysalanie danych do App
      this.setState({
        draft: ""
      });
    }
  };
  render() {
    // console.log("AddWorkOut");
    return (
      <Cointainer>
        <TextArea
          name="text"
          value={this.state.draft}
          placeholder="Nazwa ćwiczenia..."
          onChange={this.handleChange}
          row="1"
          maxLength="20"
        />
        {/* <input
          value={this.state.draft}
          type="text"
          placeholder={this.state.draft} //nie czysci zawartosci
          onChange={this.handleChange}
        /> */}
        <Button onClick={this.handleClick} className="fas fa-check" />
      </Cointainer>
    );
  }
}

export default AddWorkOut;
