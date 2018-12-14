import React from "react";

const Panel = props => {
  return (
    <>
      <h1>Lista cwiczen: </h1>
      <ul>
        {props.data.map(key => (
          <li>{key}</li>
        ))}
      </ul>
    </>
  );
};

export default Panel;
