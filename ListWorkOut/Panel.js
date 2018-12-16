import React from "react";
import OptionPanel from "./OptionPanel";
import OptionList from "./OptionList";

const Panel = props => {
  const id = props.idList;
  return (
    <>
      <h1>Lista cwiczen: </h1>
      <OptionList data={props.data["lista_" + id].opcje_listy} />
      <ul>
        <OptionPanel data={props.data["lista_" + id]} />
      </ul>
    </>
  );
};

export default Panel;
