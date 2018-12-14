import React, { Component } from "react";
import Panel from "../ListWorkOut/Panel.js";
import AddWorkOut from "../ListWorkOut/AddWorkOut.js";
import NewList from "../ListWorkOut/NewList";

class ListWorkOut extends Component {
  render() {
    return (
      <>
        <Panel data={this.props.data} />
        <AddWorkOut add={this.props.addWorkOut} />
        <NewList addNew={this.props.addNewList} />
      </>
    );
  }
}

export default ListWorkOut;
