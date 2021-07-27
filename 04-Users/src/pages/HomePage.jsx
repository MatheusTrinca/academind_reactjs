import React, { useState } from 'react';
import AddUser from '../components/AddUser/AddUser';
import styles from './HomePage.module.css';
import { usersData } from '../data/Users';
import UsersList from '../components/UsersList/UsersList';

const HomePage = () => {
  const [users, setUsers] = useState(usersData);

  const addNewUser = (name, age, setOpenModal) => {
    const id = new Date().getTime();
    const newUser = { id, name, age };
    setUsers([...users, newUser]);
  };

  return (
    <div className={styles.homepage}>
      <h2 className={styles.title}>Users Add</h2>
      <AddUser addNewUser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
};

export default HomePage;
