// src/components/UserItem.js
import React, { useState } from 'react';

function UserItem({ user, onUpdateAge }) {
  const [editAge, setEditAge] = useState(user.age);
  const [isEditing, setIsEditing] = useState(false);

  const handleAgeChange = (event) => {
    setEditAge(event.target.value);
  };

  const handleUpdateAge = () => {
    onUpdateAge(user.id, editAge);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p>Name: {user.name}</p>
      {isEditing ? (
        <div>
          <label>Age:</label>
          <input type="number" value={editAge} onChange={handleAgeChange} />
          <button onClick={handleUpdateAge}>Save</button>
        </div>
      ) : (
        <p>Age: {user.age} <button onClick={handleEditClick}>Edit Age</button></p>
      )}
    </div>
  );
}

export default UserItem;
