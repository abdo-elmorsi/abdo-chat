import React from "react";
import "./TodoItems.css";

const TodoItem = (props) => {
  // const items = props.items;
  // const DeleteItem = props.DeleteItem;
  const { items, DeleteItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item, index) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => DeleteItem(index)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>there is no item to show</p>
  );
  return (
    <div className="ListItem">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Achion</span>
      </div>
      {ListItems}
    </div>
  );
};
export default TodoItem;
