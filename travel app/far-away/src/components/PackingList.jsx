import React from 'react'
// import { initialItems } from '../constant'

const PackingList = ({ items, onHandleDeleteItem }) => {
  return (
    <div className="list">
        <ul className='overflow-hidden'>
            {
                items.map((item) => <Item item={item} key={item.id} onHandleDeleteItem={onHandleDeleteItem} />)
            }
        </ul>
    </div>
  )
}

export default PackingList


function Item ({ item, onHandleDeleteItem }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button onClick={() => onHandleDeleteItem(item.id)}>❌</button>
        </li>
    )
}