import React, { Component } from "react";
import "./AddItems.css";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() !== "" && this.state.age.trim() !== "") {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };
  render() {
    return (
      <div className="AddItem">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            id="age"
            placeholder="Enter Your Age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Enter" />
        </form>
      </div>
    );
  }
}
export default AddItem;
