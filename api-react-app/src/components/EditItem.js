// components/EditItem.js
import React, { useState, useEffect } from 'react';

function EditItem({ id, setEditing }) {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(`https://mockapi.io/projects/65c96a7f3b05d29307de8f17/users/${id}`)
      .then(response => response.json())
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating item (not provided)
    setEditing(null);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditItem;
