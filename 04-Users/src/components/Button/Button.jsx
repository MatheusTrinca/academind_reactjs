import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, remove, type, actionBtn }) => {
  return (
    <button
      onClick={actionBtn}
      type={type || 'button'}
      className={`${styles.button} ${remove && styles.remove}`}
    >
      {text}
    </button>
  );
};

export default Button;
