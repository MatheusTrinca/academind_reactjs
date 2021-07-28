import React from 'react';
import User from '../User/User';
import styles from './UsersList.module.css';

const UsersList = ({ users, removeUser }) => {
  return (
    <div className={styles['users-list']}>
      {users.map(user => (
        <User key={user.id} {...user} removeUser={removeUser} />
      ))}
    </div>
  );
};

export default UsersList;
