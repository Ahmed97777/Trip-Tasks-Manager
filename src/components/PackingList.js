import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({
  fullList,
  deleteItemFromFullList,
  handleChangeInCheckBox,
  clearAllItemsFromFullList,
}) => {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: true },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  //   { id: 3, description: "T-shirts", quantity: 12, packed: false },
  //   { id: 4, description: "Hats", quantity: 12, packed: true },
  // ];

  const [sortBy, setSortBy] = useState("By Input Order");

  let sortedItems;
  if (sortBy === "By Input Order") {
    sortedItems = fullList;
  }

  if (sortBy === "By Description") {
    sortedItems = fullList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "By Packed Status") {
    sortedItems = fullList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItemFromFullList={deleteItemFromFullList}
            handleChangeInCheckBox={handleChangeInCheckBox}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="By Input Order">Sort By Input Order</option>
          <option value="By Description">Sort By Description</option>
          <option value="By Packed Status">Sort By Packed Status</option>
        </select>
        <button onClick={clearAllItemsFromFullList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
