import React from "react";
import OptionPanel from "./OptionPanel";
import OptionList from "./OptionList";

const Panel = props => {
  const id = props.idList;
  console.log("Panel");
  return (
    <>
      <h1>Lista cwiczen: </h1>
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
          // deleteFlag = {props.deleteFlag}
          // flagControl = {props.flagControl}
        />
      </ul>
    </>
  );
};

export default Panel;
