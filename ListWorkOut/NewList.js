import React from "react";

const NewList = () => {
  // console.log("NewList");
  return (
    <div>
      <button onClick={() => this.props.addNew(this.props.data)}>
        Dodaj Nowa Liste
      </button>
      <button onClick={() => this.props.deleteList(this.props.data)}>
        Usun Aktualna Liste
      </button>
      <button onClick={() => this.props.clearList(this.props.data)}>
        Wyczysc liste
      </button>
    </div>
  );
};

export default NewList;
