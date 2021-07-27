import React, { useState } from 'react';
import AddUser from '../components/AddUser/AddUser';
import styles from './HomePage.module.css';
import { usersData } from '../data/Users';
import UsersList from '../components/UsersList/UsersList';
import ErrorModal from '../components/ErrorModal/ErrorModal';

const HomePage = () => {
  const [users, setUsers] = useState(usersData);
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  const addNewUser = (name, age) => {
    const id = new Date().getTime();
    const newUser = { id, name, age };
    setUsers([...users, newUser]);
  };

  const modalHandler = (open, title = '', message = '') => {
    setModal({ open, title, message });
  };
  //! FECHAR O MODAL
  //! REMOVE USER FROM USERLIST

  return (
    <div className={styles.homepage}>
      {modal.open && (
        <ErrorModal
          closeModal={modalHandler}
          title={modal.title}
          message={modal.message}
        />
      )}
      <h2 className={styles.title}>Users Add</h2>
      <AddUser addNewUser={addNewUser} showModal={modalHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default HomePage;
