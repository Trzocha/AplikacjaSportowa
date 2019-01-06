import React from "react";
import OptionPanel from "./OptionPanel";
import OptionList from "./OptionList";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-family: "Play";
`;

const Panel = props => {
  const id = props.idList;
  // console.log("Panel");
  return (
    <>
      <H1>Lista Ćwiczeń: </H1>
      <OptionList
        data={props.data["lista_" + id].opcje_listy}
        changeValue={props.changeInputValueList} //zmiana wlasciwosci w opcjach listy
      />
      <ul>
        <OptionPanel
          data={props.data["lista_" + id]}
          idList={id}
          changeValue={props.changeInputValueWorkOut} //zmiana wlasciwosci w opcjach danego cwiczenia
          amountList={props.data["ilosc_list"]}
          deleteWorkOut={props.deleteWorkOut}
        />
      </ul>
    </>
  );
};

export default Panel;
