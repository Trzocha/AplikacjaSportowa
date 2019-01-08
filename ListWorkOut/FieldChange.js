import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const TextInput = styled.input`
  position: absolute;
  border: 2px solid #2c3e50;
  background: #c5eff7;
  border-radius: 10px;
  padding: 2px;
  color: #2c3e50;
  width: 40px;
  right: 20%;
  font-size: 8px;
  line-height: 1.5;
`;
const Button = styled.input`
  position: absolute;
  right: 20px;
  width: 40px;
  color: #eee;
  border: 2px solid #eee;
  background-color: transparent;
  cursor: pointer;
  line-height: 2;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  font-size: 8px;
  text-transform: uppercase;
  outline: none;
  :active {
    border: 2px solid #2ecc71;
  }
`;

// const PoseCointeiner = posed.div({
//   show: {
//     width: "100px",
//     right: "20px"
//   },
//   hide: {
//     width: "30px",
//     right: "110px"
//   }
// });

const FieldChange = props => {
  // console.log("FieldChange");
  return (
    <>
      {props.text ? (
        <TextInput type="text" onChange={props.handleChange} />
      ) : (
        <TextInput
          type="number"
          onChange={props.handleChange}
          pattern="[0-9]*"
        />
      )}
      <Button
        type="submit"
        id={props.id}
        value="OK"
        onClick={props.handleClick}
      />
      <br />
    </>
  );
};

FieldChange.defaulProps = {
  text: false
};

export default FieldChange;
