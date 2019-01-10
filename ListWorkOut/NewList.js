import React from "react";
import styled from "styled-components";

const Containter = styled.div`
  width: 40%;
  transform: translate(75%, 0);
  background: transparent;
  margin-top: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
`;
const Button = styled.button`
  width: 33%;
  padding: 5px 0;
  border: none;
  background: #2ecc71;
  color: #eee;
  font-size: 18px;
`;
const ButtonAdd = styled(Button)`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
const ButtonDelete = styled(Button)`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`;
const ButtonClear = styled(Button)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const NewList = props => {
  // console.log("NewList");
  return (
    <Containter>
      <ButtonAdd
        className="fas fa-plus"
        onClick={() => props.addNew(props.data)}
      />
      <ButtonDelete
        className="fas fa-trash"
        onClick={() => props.deleteList(props.data)}
      />
      <ButtonClear
        className="fas fa-broom"
        onClick={() => props.clearList(props.data)}
      />
    </Containter>
  );
};

export default NewList;
