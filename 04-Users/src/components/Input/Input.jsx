import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, text, ...props }) => {
  return (
    <input
      className={styles.input}
      type={type || 'text'}
      placeholder={text}
      {...props}
    />
  );
};

export default Input;
