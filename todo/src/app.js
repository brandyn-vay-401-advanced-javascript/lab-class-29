import React from "react";

import "./todo.css";

import Form from "./components/form/form.js";
import Header from "./components/header/header.js";
import List from "./components/list/list.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: ["default item"]
    };
  }

  addIt = string => {
    this.setState({ items: [...this.state.items, string] });
  };

  deleteIt = idx => {
    this.state.items.splice(idx,1)
    this.setState({ items: this.state.items})
  };

  render() {
    return (
      <>
        <Header title="This is a to do list app" />
        <Form action={this.addIt} items={this.state.items} />
        <List action={this.deleteIt} items={this.state.items} />
      </>
    );
  }
}

export default App;
