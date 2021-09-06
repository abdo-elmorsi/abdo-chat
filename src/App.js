import React, { Component } from "react";
import TodoItem from "./Components/TodoItems/TodoItems";
import AddItem from "./Components/AddItems/AddItems";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Abdo", age: 20 },
      { id: 2, name: "Ahmed", age: 60 },
      { id: 3, name: "Mohame", age: 90 },
    ],
  };
  DeleteItem = (i) => {
    let items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items,
    });
    // let i = items.findIndex((item) => item.id === id);

    // let items = this.state.items.filter((item) => {
    //   return item.id !== id;
    // });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItem items={this.state.items} DeleteItem={this.DeleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
