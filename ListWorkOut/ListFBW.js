import React, { Component } from "react";
import Panel from "./Panel.js";
import AddWorkOut from "./AddWorkOut.js";
import NewList from "./NewList";
import IdForm from "../ListWorkOut/IdFrom";

class ListFBW extends Component {
  render() {
    return (
      <>
        <IdForm //OK
          changeId={this.props.changeId}
          lenghtList={this.props.lenghtList}
        />
        <Panel data={this.props.data} />
        <AddWorkOut add={this.props.addWorkOut} />
        <NewList addNew={this.props.addNewList} />
      </>
    );
  }
}

export default ListFBW;
