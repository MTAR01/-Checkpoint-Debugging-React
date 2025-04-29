// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  const updateUserAge = (userId, newAge) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, age: parseInt(newAge, 10) } : user
    ));
  };

  return (
    <div>
      <h1>User Management App</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onUpdateAge={updateUserAge} />
    </div>
  );
}

export default App;
