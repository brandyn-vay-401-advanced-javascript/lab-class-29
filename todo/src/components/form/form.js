import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      items: this.props.items,
      name: "",
      difficulty: 1-5,
      dueDate: this.props.dueDate
    };
  }
  handler = e => {
    e.preventDefault();
    this.props.action(this.state.current);
    this.setState({ current: "" });
    e.target.reset();
  };

  capture = e => {
    let current = e.target.value;
    this.setState({ current });
  };

  render() {
    return (
      <form onSubmit={this.handler}>
        <input onChange={this.capture} /> Add New Item
      </form>
    );
  }
}

export default Form;
