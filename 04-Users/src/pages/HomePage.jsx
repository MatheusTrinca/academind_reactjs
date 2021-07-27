import React, { useState } from 'react';
import AddUser from '../components/AddUser/AddUser';
import styles from './HomePage.module.css';
import { usersData } from '../data/Users';
import UsersList from '../components/UsersList/UsersList';
import ErrorModal from '../components/ErrorModal/ErrorModal';

const HomePage = () => {
  const [users, setUsers] = useState(usersData);
  const [openModal, setOpenModal] = useState(true);

  const addNewUser = (name, age) => {
    const id = new Date().getTime();
    const newUser = { id, name, age };
    setUsers([...users, newUser]);
  };

  return (
    <div className={styles.homepage}>
      {openModal && <ErrorModal />}
      <h2 className={styles.title}>Users Add</h2>
      <AddUser addNewUser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
};

export default HomePage;
