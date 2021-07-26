import React from 'react';
import styles from './Input.module.css';

const Input = ({ text }) => {
  return <input className={styles.input} type="text" placeholder={text} />;
};

export default Input;
