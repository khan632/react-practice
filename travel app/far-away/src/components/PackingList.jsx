import React from "react";
// import { initialItems } from '../constant'

const PackingList = ({ items, onHandleDeleteItem, onUpdateItem }) => {
  return (
    <div className="list">
      <ul className="overflow-hidden">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDeleteItem={onHandleDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
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
