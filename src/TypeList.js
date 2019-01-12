import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 50%;
  padding: 20px 30px 20px 30px;
  text-decoration: none;
  text-align: center;
  font-family: "Play";
  font-size: 12px;
  color: #7f8c8d;
  cursor: pointer;
  background: #2c3e50;
  border-bottom: 5px solid #34495e;
  transition-property: border-bottom 0.6s linear;
  :hover {
    color: #eeeeee;
  }
`;
const StyleButton = styled(Button)`
  border-bottom: 5px solid ${props => (props.check ? "#2ecc71" : "auto")};
  color: ${props => (props.check ? "#eee" : "auto")};
`;

class TypeList extends Component {
  state = {
    isConfirmed: true,
    prevTarget: "FBW"
  };
  handleChange = e => {
    e.preventDefault();
    // console.log(e.target.id);
    if (e.target.id !== this.state.prevTarget) {
      this.props.ChangeTypeList(e);
      this.setState({
        isConfirmed: !this.state.isConfirmed,
        prevTarget: e.target.id
      });
    }
  };
  render() {
    // console.log("TypeList");
    return (
      <>
        <form onChange={this.handleChange}>
          <StyleButton
            id="FBW"
            onClick={this.handleChange}
            check={this.state.isConfirmed}
          >
            Z własna masą ciała
          </StyleButton>
          <StyleButton
            id="WEIGHT"
            onClick={this.handleChange}
            check={!this.state.isConfirmed}
          >
            Z ciężarami
          </StyleButton>
        </form>
      </>
    );
  }
}

export default TypeList;
