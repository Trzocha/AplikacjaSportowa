import React, { Component } from "react";

class TypeList extends Component {
  //   handleChangeTypeList = e => {

  //     this.props.ChangeTypeList(e.target.value);
  //   };
  render() {
    return (
      <>
        <form onChange={this.props.ChangeTypeList}>
          <input type="radio" name="gender" value="FBW" /> Z własna masą ciała
          <input type="radio" name="gender" value="WEIGHT" /> Z ciężarami
        </form>
      </>
    );
  }
}

export default TypeList;
