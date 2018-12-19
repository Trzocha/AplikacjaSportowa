import React, { Component } from "react";
import Panel from "./Panel.js";
import AddWorkOut from "./AddWorkOut.js";
import NewList from "./NewList";
import IdForm from "../ListWorkOut/IdFrom";

class ListFBW extends Component {
  handlerChangeOptionList = (id, draft) => {
    const object_change = {
      id_input: id,
      value_input: draft,
      list_number: this.props.idList,
      list_name: this.props.data.name
    };
    console.log(object_change);
    this.props.changeInputList(object_change);
  };
  render() {
    const it = this.props;
    return (
      <>
        <IdForm //OK
          changeId={it.changeId}
          lenghtList={it.data.ilosc_list}
        />
        <Panel
          data={it.data}
          idList={it.idList}
          changeInputValue={this.handlerChangeOptionList}
        />
        <AddWorkOut add={it.addWorkOut} data={it.data.name} />
        <NewList addNew={it.addNewList} data={it.data.name} />
      </>
    );
  }
}

export default ListFBW;
