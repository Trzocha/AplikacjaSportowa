import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  position: absolute;
  border: 2px solid #2c3e50;
  background: #c5eff7;
  border-radius: 10px;
  padding: 2px;
  color: #2c3e50;
  width: ${props => (props.text ? "80px" : "40px")};
  height: ${props => (props.text ? "50px" : "auto")};
  right: 20%;
  font-size: 8px;
  line-height: 1.5;
`;
const TextArea = styled.textarea`
  width: 65%;
  font-family: "Play";
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
  padding: 5px;
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

const FieldChange = props => {
  // console.log("FieldChange");
  return (
    <>
      {props.text ? (
        <TextArea
          name="text"
          rows={props.row}
          wrap="soft"
          onChange={props.handleChange}
          autoFocus="autoFocus"
          maxLength={props.maxLength}
          required
        />
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
