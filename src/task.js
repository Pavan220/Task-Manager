import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <p className="titleLine">{this.props.title}</p>
        <p className="noteLine">{this.props.note} </p>
        {this.props.children}
      </div>
    );
  }
}

export default Task;
