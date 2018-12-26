import React, { Component } from "react";

class NewList extends Component {
  render() {
    console.log("NewList");
    return (
      <div>
        <button onClick={() => this.props.addNew(this.props.data)}>
          Dodaj Nowa Liste
        </button>
        <button onClick={() => this.props.deleteList(this.props.data)}>
          Usun Aktualna Liste
        </button>
      </div>
    );
  }
}

export default NewList;
