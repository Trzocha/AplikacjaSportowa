import React, { Component } from "react";
import AddWorkOut from "./AddWorkOut";
import styled from "styled-components";

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #2ecc71;
  color: #eee;
  border: none;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
`;

class PanelAddWorkOut extends Component {
  state = {
    flag_add: false
  };
  handleClick = () => {
    this.setState(prevState => ({
      flag_add: !prevState.flag_add
    }));
  };
  render() {
    return (
      <>
        {this.state.flag_add ? (
          <AddWorkOut
            add={this.props.addWorkOut}
            data={this.props.data}
            callBackClick={this.handleClick}
          />
        ) : (
          <Button onClick={this.handleClick} className="fas fa-plus" />
        )}
      </>
    );
  }
}

export default PanelAddWorkOut;
