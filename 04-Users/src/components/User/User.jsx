import React from 'react';
import styles from './User.module.css';
import Button from '../Button/Button';

const User = ({ name, age }) => {
  return (
    <div className={styles.user}>
      <h2 className={styles.name}>{name},</h2>
      <h2 className={styles.age}>{age} anos</h2>
      <Button text="Remove" remove={true} />
    </div>
  );
};

export default User;
