import React, { useState } from 'react'

const Form = ({ onHandleAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onHandleAddItem(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }

  
  return (
    <form className="add-form" onClick={handleSubmit}>
        <h3>What di you need for your 😍 trip ?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {
            Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))
          }
        </select>
        <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button> 
    </form>
  )
}

export default Form