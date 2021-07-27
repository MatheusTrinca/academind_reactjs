import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, remove, type }) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${remove && styles.remove}`}
    >
      {text}
    </button>
  );
};

export default Button;
