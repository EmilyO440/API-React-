// components/Home.js
import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import EditItem from './EditItem';

function Home() {
  const [items, setItems] = useState([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65c96a7f3b05d29307de8f16.mockapi.io/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleAdd = () => {
    setAdding(true);
  };

  return (
    <div>
      <h2>Developers</h2>
      {error && <p>Error fetching data: {error}</p>}
      <div className="list-container">
        {items.map(item => (
          <div className="list-item" key={item.id}>
            <img src={item.avatar} alt={item.name} />
            <span>{item.name}</span>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>
      <div className="add-link">
        <button onClick={handleAdd}>Add User</button>
      </div>
      {adding && <AddItem setAdding={setAdding} />}
      {editing && <EditItem id={editing} setEditing={setEditing} />}
    </div>
  );
}

export default Home;
