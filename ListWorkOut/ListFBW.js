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
    this.props.changeInputList(object_change);
  };
  handlerChangeOptionWorkOut = (id, draft, numberWorkOut, serieNumber) => {
    const object_change = {
      id_input: id,
      value_input: draft,
      workOut_number: numberWorkOut,
      serie_number: serieNumber,
      list_number: this.props.idList,
      list_name: this.props.data.name
    };
    this.props.changeInputWorkOut(object_change);
  };
  handlerDeleteList = name => {
    const object_delete = {
      name: name,
      id: parseInt(this.props.idList)
    };
    this.setState({
      deleteFlag: true
    });
    this.props.deleteList(object_delete);
  };
  render() {
    const it = this.props;
    console.log("ListFBW");
    return (
      <>
        <IdForm //OK
          changeId={it.changeId}
          lenghtList={it.data.ilosc_list}
          idList={it.idList}
        />
        <Panel
          data={it.data}
          idList={it.idList}
          changeInputValueList={this.handlerChangeOptionList}
          changeInputValueWorkOut={this.handlerChangeOptionWorkOut}
        />
        <AddWorkOut add={it.addWorkOut} data={it.data.name} />
        <NewList
          addNew={it.addNewList}
          data={it.data.name}
          deleteList={this.handlerDeleteList}
          clearList={this.props.clearList}
        />
      </>
    );
  }
}

export default ListFBW;
