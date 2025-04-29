// src/components/UserList.js
import React from 'react';
import UserItem from './UserItem';

function UserList({ users, onUpdateAge }) {
  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <UserItem key={user.id} user={user} onUpdateAge={onUpdateAge} />
      ))}
    </div>
  );
}

export default UserList;
