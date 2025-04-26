import React, { useState } from 'react';
import './App.css';



function ANS13() {
  const [items, setItems] = useState('');
  const [quantity, setQuantity] = useState('');
  const [list, setList] = useState([]);

  function addItems() {
    if (items.trim() === '') {
      alert('Item name cannot be empty!');
      return;
    }

    if (quantity.trim() === '' || isNaN(Number(quantity))) {
      alert('Enter a valid number for quantity');
      return;
    }

    const newItem = {
      id: list.length + 1,
      items,
      quantity,
    };

    setList([...list, newItem]);
    setItems('');
    setQuantity('');
  }

  function removeAllItems() {
    setList([]);
  }

  function deleteItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter an Item"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button className='buttonConatainer' onClick={addItems}>Add</button>
      <button className="buttonConatainer" onClick={removeAllItems}>Clear All</button>

      {list.map((data) => (
        <div key={data.id}>
          <p>ID: {data.id}</p>
          <p>Item: {data.items}</p>
          <p>Quantity: {data.quantity}</p>
          <button onClick={() => deleteItem(data.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default ANS13;
