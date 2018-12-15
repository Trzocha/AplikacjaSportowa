import React from "react";
import OptionPanel from "./OptionPanel";
import OptionList from "./OptionList";

const Panel = props => {
  return (
    <>
      <h1>Lista cwiczen: </h1>
      <OptionList />
      <ul>
        <OptionPanel data={props.data} />
      </ul>
    </>
  );
};

export default Panel;
