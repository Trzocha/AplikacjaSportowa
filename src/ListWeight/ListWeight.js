import React, { Component } from "react";
import IdForm from "../ListWorkOut/IdFrom";
import NewList from "../ListWorkOut/NewList";

class ListWeight extends Component {
  render() {
    return (
      <>
        <IdForm
          changeId={this.props.changeId}
          lenghtList={this.props.lengthList}
        />
        <NewList addNew={this.props.addNewList} />
      </>
    );
  }
}

export default ListWeight;
