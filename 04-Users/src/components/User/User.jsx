import React from 'react';
import styles from './User.module.css';
import Button from '../Button/Button';

const User = ({ id, name, age, removeUser }) => {
  return (
    <div className={styles.user}>
      <h2 className={styles.name}>{name},</h2>
      <h2 className={styles.age}>{age} anos</h2>
      <Button text="Remove" remove={true} actionBtn={() => removeUser(id)} />
    </div>
  );
};

export default User;
