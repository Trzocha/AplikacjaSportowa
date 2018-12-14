import React, { Component } from "react";
// import Button from "../src/Button.js";
// import WorkItem from "../src/WorkItem";
import ListWorkOut from "./ListWorkOut/ListWorkOut";
import IdForm from "../src/IdFrom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { task: ["pompki", "podciaganie pod chwytem"] },
        { task: ["hantle", "podciaganie nad chwytem"] }
      ],
      id: 1
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
    // this.handlechangeId(this.state.list.length);
  };
  handlePositionWorkOut = () => {};
  handlechangeId = number => {
    this.setState({
      id: number
    });
  };
  render() {
    return (
      <div className="App">
        <IdForm
          changeId={this.handlechangeId}
          lenghtList={this.state.list.length}
        />
        <ListWorkOut
          addWorkOut={this.handleAddWorkOut} //dodanie cwiczenia do wybranej listy
          addNewList={this.handleAddNewList} //dodanie nowej listy
          positionWorkOut={this.handlePositionWorkOut} //mozliwosc zamiany miejscami cwiczen
          data={this.state.list[this.state.id - 1].task} //wysylana lista
          idList={this.state.id} //id listy
        />
      </div>
    );
  }
}

export default App;
