import React from 'react';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = () => {
  return (
    <div className={styles.backdrop}>
      <Card>
        <div className="modal"></div>
      </Card>
    </div>
  );
};

export default ErrorModal;
