import React from "react";
import OptionPanel from "./OptionPanel";

const Panel = props => {
  return (
    <>
      <h1>Lista cwiczen: </h1>
      <ul>
        <OptionPanel data={props.data} />
        {/* {props.data.map(key => (
          <li>{key}</li>
        ))} */}
      </ul>
    </>
  );
};

export default Panel;
