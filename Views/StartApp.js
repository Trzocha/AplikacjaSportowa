import React from "react";
import ControlView from "../Views/ControlView";

const StartApp = props => {
  return <>{props.active ? <ControlView data={props.data} /> : null}</>;
};

export default StartApp;
