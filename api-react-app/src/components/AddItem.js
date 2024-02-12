// components/AddItem.js
import React, { useState } from 'react';

function AddItem({ setAdding }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding item (not provided)
    setAdding(false);
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
