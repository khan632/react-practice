import React from 'react'
// import { initialItems } from '../constant'

const PackingList = ({ items }) => {
  return (
    <div className="list">
        <ul className='overflow-hidden'>
            {
                items.map((item) => <Item item={item} />)
            }
        </ul>
    </div>
  )
}

export default PackingList


function Item ({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    )
}