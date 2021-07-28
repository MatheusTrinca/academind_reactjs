import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Input from '../Input/Input';
import styles from './AddUser.module.css';

const AddUser = ({ addNewUser, showModal }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const addUserHandler = e => {
    e.preventDefault();
    if (name.length > 0 && age > 0) {
      addNewUser(name, age);
      setName('');
      setAge('');
    } else {
      showModal(true, 'Invalid Input', 'Please fill all fields');
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={addUserHandler}>
        <Input
          type="text"
          text="Enter username"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="number"
          text="Enter age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <Button text="Add User" type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
