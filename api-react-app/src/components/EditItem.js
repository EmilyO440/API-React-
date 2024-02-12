import React, { useState, useEffect } from 'react';

function EditItem({ id, setEditing }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user data to pre-fill the form
    const fetchData = async () => {
      try {
        const response = await fetch(`https://65c96a7f3b05d29307de8f16.mockapi.io/locations/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://65c96a7f3b05d29307de8f16.mockapi.io/locations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      setEditing(null); // Reset the editing state
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://65c96a7f3b05d29307de8f16.mockapi.io/locations/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setEditing(null); // Reset the editing state
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="edit-form">
      <h3>Edit User</h3>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter new name"
          required
        />
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDelete}>Delete</button> {/* Moved the Delete button outside of the form */}
      <button onClick={() => setEditing(null)}>Cancel</button>
    </div>
  );
}

export default EditItem;