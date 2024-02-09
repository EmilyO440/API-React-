// AddRecord.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('https://mockapi.io/api/v1/records')
      .then(response => setRecords(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>All Records</h1>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddRecord;
