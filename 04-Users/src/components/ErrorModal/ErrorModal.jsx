import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, closeModal }) => {
  return (
    <div className={styles.backdrop}>
      <Card>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <main>
            <p className={styles.message}>{message}</p>
          </main>
          <footer className={styles.footer}>
            <Button
              onClick={() => closeModal(false)}
              text="Close"
              remove={true}
            />
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
