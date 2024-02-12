
import React, { useState } from 'react';

function AddItem({ onAdd }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://65c96a7f3b05d29307de8f16.mockapi.io/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      const data = await response.json();
      onAdd(data); // Pass the new item data to the parent component
      setName(''); // Clear the input field
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="add-form">
      <h3>Add User</h3>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;

