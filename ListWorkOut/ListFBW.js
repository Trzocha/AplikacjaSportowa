import React, { Component } from "react";
import Panel from "./Panel.js";
import AddWorkOut from "./AddWorkOut.js";
import NewList from "./NewList";
import IdForm from "../ListWorkOut/IdFrom";

class ListFBW extends Component {
  render() {
    const it = this.props;
    return (
      <>
        <IdForm //OK
          changeId={it.changeId}
          lenghtList={it.data.ilosc_list}
        />
        <Panel data={it.data} idList={it.idList} />
        <AddWorkOut add={it.addWorkOut} data={it.data.name} />
        <NewList addNew={it.addNewList} />
      </>
    );
  }
}

export default ListFBW;
