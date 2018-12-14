import React, { Component } from "react";

class WorkItem extends Component {
  state = {
    workout: this.props.tasks
  };
  render() {
    // const item = this.props.tasks;
    // console.log(item);
    return (
      <div>
        <Item name={this.state.workout[0].task} />
        <Item name={this.state.workout[1].task} />
      </div>
    );
  }
}

const Item = props => {
  return <p>{props.name}</p>;
};

export default WorkItem;
