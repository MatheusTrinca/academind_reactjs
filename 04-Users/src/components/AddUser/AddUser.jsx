import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AddUser.module.css';

const AddUser = ({ addNewUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const addUserHandler = e => {
    e.preventDefault();
    addNewUser(name, age);
  };

  return (
    <div className={styles['add-user']}>
      <form onSubmit={addUserHandler}>
        <Input
          text="Enter the username"
          value={name}
          onChange={() => setName(name)}
        />
        <Input text="Enter the age" value={age} onChange={() => setAge(age)} />
        <Button text="Add User" type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
