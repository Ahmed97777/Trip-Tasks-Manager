import React from "react";

const Item = ({ item, deleteItemFromFullList, handleChangeInCheckBox }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleChangeInCheckBox(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItemFromFullList(item.id)}>❌</button>
    </li>
  );
};

export default Item;
