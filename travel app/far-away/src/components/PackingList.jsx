import React, { useState } from "react";
// import { initialItems } from '../constant'

const PackingList = ({ items, onHandleDeleteItem, onUpdateItem }) => {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItem;

  if (sortedBy === "input") sortedItem = items;
  if (sortedBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul className="overflow-hidden">
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDeleteItem={onHandleDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;

function Item({ item, onHandleDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
