import React, { Component } from "react";
// import Button from "../src/Button.js";
// import WorkItem from "../src/WorkItem";
import ListFBW from "./ListWorkOut/ListFBW";
import ListWeight from "../src/ListWeight/ListWeight";
import TypeList from "../src/TypeList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { task: ["pompki", "podciaganie pod chwytem"] },
        { task: ["hantle", "podciaganie nad chwytem"] }
      ],
      id: 1,
      type: true
    };
  }
  handleAddWorkOut = value => {
    const item = this.state.list[this.state.id - 1].task;
    item.push(value); //jakiem chu**m state.list[].task zmienił się bez uzycia setState??
    this.setState({
      task: item
    });
  };
  handleAddNewList = () => {
    const tmp_list = this.state.list;
    tmp_list.push({ task: [] });
    this.setState({
      list: tmp_list
    });
    this.handlechangeId(this.state.list.length);
  };
  handlePositionWorkOut = () => {};
  handlechangeId = number => {
    this.setState({
      id: number
    });
  };
  handleChangeTypeList = e => {
    //OK
    console.log(e.target.value);
    if (e.target.value === "FBW") {
      this.setState({
        type: true
      });
    } else if (e.target.value === "WEIGHT") {
      this.setState({
        type: false
      });
    }
  };
  render() {
    return (
      <div className="App">
        <TypeList ChangeTypeList={this.handleChangeTypeList} />
        {this.state.type ? (
          <ListFBW
            changeId={this.handlechangeId}
            lenghtList={this.state.list.length}
            addWorkOut={this.handleAddWorkOut} //dodanie cwiczenia do wybranej listy
            addNewList={this.handleAddNewList} //dodanie nowej listy
            positionWorkOut={this.handlePositionWorkOut} //mozliwosc zamiany miejscami cwiczen
            data={this.state.list[this.state.id - 1].task} //wysylana lista
            idList={this.state.id} //id listy
          />
        ) : (
          <ListWeight
            changeId={this.handlechangeId}
            lenghtList={this.state.list.length}
            addNewList={this.handleAddNewList}
          />
        )}
      </div>
    );
  }
}

export default App;
