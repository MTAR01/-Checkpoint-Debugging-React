// src/components/UserForm.js
import React, { useState } from 'react';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && age) {
      onAddUser({ name, age: parseInt(age, 10) });
      setName('');
      setAge('');
    } else {
      alert('Please enter both name and age.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid #eee' }}>
      <h2>Add New User</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} style={{ margin: '5px' }} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} style={{ margin: '5px' }} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
