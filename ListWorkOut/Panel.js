import React from "react";
import OptionPanel from "./OptionPanel";
import OptionList from "./OptionList";

const Panel = props => {
  const id = props.idList;
  // console.log("Panel: " + props.data);
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
        />
      </ul>
    </>
  );
};

export default Panel;
